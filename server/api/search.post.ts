import { saveSearchResult } from '@/server/utils/db'
import { googleSearchHtmlPages, fetchHtmlPage, navigatePageByHints, stripHtmlAssets, extractAnchorCandidates, heuristicExtractContacts } from '@/server/utils/scrape'
import { selectRelevantLinks, extractContactsFromHtml, suggestNavigationForContacts, selectLinksFromCandidates } from '@/server/utils/ai'

type Body = { query: string; top?: number; pages?: number }

export default defineEventHandler(async (event) => {
    const body = await readBody<Body>(event)
    if (!body?.query || typeof body.query !== 'string') {
        throw createError({ statusCode: 400, statusMessage: 'query is required' })
    }
    const runtimeConfig = useRuntimeConfig()
    const { GOOGLE_SEARCH_UA } = runtimeConfig
    const limit = body.top && body.top > 0 ? Math.min(15, body.top) : 10
    const pagesCount = body.pages && body.pages > 0 ? Math.min(10, body.pages) : 3
    const browserConfig = {
        headless: String(runtimeConfig.PUPPETEER_HEADLESS).toLowerCase() !== 'false',
        slowMo: Number(runtimeConfig.PUPPETEER_SLOWMO) || 0,
        devtools: String(runtimeConfig.PUPPETEER_DEVTOOLS).toLowerCase() === 'true',
    }

    const globalLogs: string[] = []
    const log = (msg: string) => {
        const line = `[${new Date().toISOString()}] ${msg}`
        globalLogs.push(line)
        // дублируем в серверные логи
        console.log(line)
    }

    log(`Старт запроса: "${body.query}" (top=${limit}, pages=${pagesCount})`)

    log('Шаг 1: Поиск Google... (получаю HTML с нескольких страниц)')
    const serpPages = await googleSearchHtmlPages(body.query, pagesCount, GOOGLE_SEARCH_UA, browserConfig)

    const candidates: { url: string; title: string }[] = []
    const seenLinks = new Set<string>()

    serpPages.forEach((page, index) => {
        const reduced = stripHtmlAssets(page.html)
        const localCandidates = extractAnchorCandidates(reduced, page.url, 150)

        log(`Страница ${index + 1}: кандидатов ссылок ${localCandidates.length}`)

        for (const candidate of localCandidates) {
            if (seenLinks.has(candidate.url)) {
                continue
            }

            seenLinks.add(candidate.url)
            candidates.push(candidate)
        }
    })

    log(`Всего уникальных кандидатов: ${candidates.length}`)

    log('Шаг 2a: Отбор кандидатов через ИИ ...')
    const candidatesForAi = candidates.map(c => ({ url: c.url, title: c.title, snippet: '' }))
    const aiLinks = await selectLinksFromCandidates(body.query, candidatesForAi, 15)

    let serp = aiLinks
        .map(l => ({ ...l }))
        .filter(l => /^https?:\/\//i.test(l.url))
        .slice(0, limit)

    log(`Шаг 2: ИИ выделил результатов: ${serp.length}`)
    if (!serp.length) {
        log('Шаг 2b: Пусто. Фоллбек — берём первые ссылки вручную.')
        serp = candidates.slice(0, limit).map((c) => ({
            url: c.url,
            title: c.title,
            snippet: '',
        }))
        log(`Фоллбек дал результатов: ${serp.length}`)
    }

    log('Шаг 3: Финальная фильтрация ссылок через ИИ...')
    const filtered = await selectRelevantLinks(body.query, serp)
    log(`Шаг 3: релевантных (по ИИ): ${filtered.filter(i => i.relevant).length}`)
    const AGG_DOMAINS = [
        'google.com', 'google.ru', '2gis.ru', 'yandex.ru',
        'tripadvisor.ru', 'profi.ru', 'flamp.ru', 'kudatumen.ru'
    ]
    const isAggregator = (u: string) => {
        try { const h = new URL(u).hostname.replace(/^www\./, ''); return AGG_DOMAINS.some(d => h.endsWith(d)) } catch { return false }
    }
    const relevant = filtered
        .filter(i => i.relevant)
        .filter(i => !isAggregator(i.url))
    log(`Фильтр агрегаторов: осталось ${relevant.length}`)

    const cleanPhones = (phones: string[]) => {
        const out = new Set<string>()
        const isOk = (p: string) => {
            if (!p) return false
            if (p.includes('.')) return false
            if (/\d{4}-\d{2}-\d{2}/.test(p)) return false
            if (/^(?:\d{4}-){3}\d{3,4}$/.test(p)) return false
            const plus = p.trim().startsWith('+')
            const digits = p.replace(/[^0-9]/g, '')
            const len = digits.length
            if (len < 10 || len > 15) return false
            if (!plus && !/^7|8/.test(digits)) return false
            return true
        }
        for (const ph of phones || []) {
            if (!isOk(ph)) continue
            out.add(ph)
        }
        return Array.from(out)
    }

    const cleanSocials = (socials: { platform: string; url: string }[]) => {
        if (!socials) return [] as { platform: string; url: string }[]
        const normalized: { platform: string; url: string }[] = []
        const seen = new Set<string>()
        const normUrl = (u: string) => {
            try {
                const url = new URL(u)
                // VK: оставляем только основную страницу сообщества/профиля, отбрасываем wall/video/photo/events и параметры
                if (url.hostname.endsWith('vk.com')) {
                    const path = url.pathname.replace(/\/+$/, '')
                    // запрещенные разделы/подресурсы
                    if (/^\/(wall|video|photo|events|topic|album|app|market|artist|sticker|feed|write|share|audio|groups)/.test(path)) return null
                    // допускаем только один сегмент (основная страница): /labnota, /club123, /public123
                    const segs = path.split('/').filter(Boolean)
                    if (segs.length !== 1) return null
                    url.search = ''
                    url.hash = ''
                    return url.href
                }
                // Telegram: t.me/<handle>
                if (/(^|\.)t\.me$|telegram\.me$/.test(url.hostname)) {
                    const segs = url.pathname.split('/').filter(Boolean)
                    if (!segs[0]) return null
                    url.pathname = '/' + segs[0]
                    url.search = ''
                    url.hash = ''
                    return url.href
                }
                // WhatsApp: wa.me/<digits> или api.whatsapp.com/send?phone=...
                if (/(^|\.)wa\.me$|api\.whatsapp\.com$/.test(url.hostname)) {
                    url.hash = ''
                    return url.href
                }
                // Instagram/Facebook: чистим параметры
                if (url.hostname.includes('instagram.com') || url.hostname.includes('facebook.com')) {
                    url.search = ''
                    url.hash = ''
                    return url.href
                }
                return url.href
            } catch { return null }
        }
        // Группируем по платформе, берём по 1 ссылке
        for (const s of socials) {
            if (!s?.url) continue
            const normalizedUrl = normUrl(s.url)
            if (!normalizedUrl) continue
            const key = s.platform + '|' + normalizedUrl
            if (seen.has(key)) continue
            seen.add(key)
            normalized.push({ platform: s.platform, url: normalizedUrl })
        }
        // Оставляем максимум по 1 на платформу (VK/Telegram/WhatsApp/Instagram/Facebook)
        const perPlatform = new Map<string, { platform: string; url: string }>()
        for (const s of normalized) {
            if (!perPlatform.has(s.platform)) perPlatform.set(s.platform, s)
        }
        return Array.from(perPlatform.values())
    }

    const runWithConcurrency = async <T, R>(
        items: T[],
        limit: number,
        worker: (item: T, index: number) => Promise<R | null>,
    ): Promise<R[]> => {
        if (!items.length) {
            return []
        }

        const results = new Array<R | null>(items.length).fill(null)
        let pointer = 0

        const makeWorker = async () => {
            while (true) {
                const current = pointer
                pointer += 1

                if (current >= items.length) {
                    break
                }

                results[current] = await worker(items[current], current)
            }
        }

        const workers = Array.from({ length: Math.min(limit, items.length) }, () => makeWorker())
        await Promise.all(workers)

        return results.filter((value): value is R => value !== null)
    }

    const concurrency = 3

    log(`Шаг 4: обработка ${relevant.length} ссылок (параллельно до ${concurrency}).`)

    const processLink = async (link: (typeof relevant)[number]): Promise<any | null> => {
        const itemLogs: string[] = []
        const ilog = (m: string) => {
            const line = `[${new Date().toISOString()}] [${link.url}] ${m}`
            itemLogs.push(line)
            console.log(line)
        }

        let pageRef: Awaited<ReturnType<typeof fetchHtmlPage>>['page'] | null = null

        try {
            ilog('Загрузка главной страницы...')

            const main = await fetchHtmlPage(link.url, GOOGLE_SEARCH_UA, browserConfig)

            pageRef = main.page

            ilog(`Страница загружена: ${main.finalUrl} (status=${main.status})`)

            const stripped1 = stripHtmlAssets(main.html)
            const extraction1 = await extractContactsFromHtml(stripped1, main.finalUrl)
            const heur1 = heuristicExtractContacts(stripped1, main.finalUrl)
            const socialPairs1 = new Map<string, string>()

            for (const s of extraction1.socials || []) {
                if (s?.url) socialPairs1.set(s.url, s.platform || '')
            }

            for (const s of heur1.socials) {
                if (s?.url) socialPairs1.set(s.url, s.platform || '')
            }

            const merged1 = {
                emails: Array.from(new Set([...(extraction1.emails || []), ...heur1.emails])),
                phones: cleanPhones([...(extraction1.phones || []), ...heur1.phones]),
                socials: cleanSocials(Array.from(socialPairs1.entries()).map(([url, platform]) => ({ url, platform }))),
                contactPageHints: extraction1.contactPageHints || [],
            }

            ilog(`Первичная выжимка: emails=${merged1.emails.length}, phones=${merged1.phones.length}, socials=${merged1.socials.length}`)

            if (merged1.emails.length || merged1.phones.length || merged1.socials.length) {
                ilog('Контакты найдены на главной, сохраняю результат')
                return { link, page: main.finalUrl, contacts: merged1, logs: itemLogs }
            }

            const hints = extraction1.contactPageHints.length
                ? extraction1.contactPageHints
                : await suggestNavigationForContacts(main.html, main.finalUrl)

            ilog(`Переход по подсказкам (${hints.length}) для поиска контактов...`)

            const navigated = await navigatePageByHints(pageRef, hints)

            ilog(`Открыта страница: ${navigated.url}`)

            const stripped2 = stripHtmlAssets(navigated.html)
            const extraction2 = await extractContactsFromHtml(stripped2, navigated.url)
            const heur2 = heuristicExtractContacts(stripped2, navigated.url)
            const socialPairs2 = new Map<string, string>()

            for (const s of extraction2.socials || []) {
                if (s?.url) socialPairs2.set(s.url, s.platform || '')
            }

            for (const s of heur2.socials) {
                if (s?.url) socialPairs2.set(s.url, s.platform || '')
            }

            const merged2 = {
                emails: Array.from(new Set([...(extraction2.emails || []), ...heur2.emails])),
                phones: cleanPhones([...(extraction2.phones || []), ...heur2.phones]),
                socials: cleanSocials(Array.from(socialPairs2.entries()).map(([url, platform]) => ({ url, platform }))),
                contactPageHints: extraction2.contactPageHints || [],
            }

            ilog(`Повторная выжимка: emails=${merged2.emails.length}, phones=${merged2.phones.length}, socials=${merged2.socials.length}`)

            return { link, page: navigated.url, contacts: merged2, hintsTried: hints, logs: itemLogs }
        } catch (error: any) {
            ilog(`Ошибка при обработке: ${error?.message || error}`)
            return { link, page: link.url, contacts: { emails: [], phones: [], socials: [], contactPageHints: [] }, logs: itemLogs, error: true }
        }
    }

    const results = await runWithConcurrency(relevant, concurrency, processLink)

    log(`Завершено. Возвращаю ${results.length} элементов.`)

    const historyId = saveSearchResult(body.query, { results, logs: globalLogs })

    return { query: body.query, total: results.length, results, logs: globalLogs, historyId }
})


