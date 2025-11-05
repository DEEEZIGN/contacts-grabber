import { googleSearchHtml, fetchHtml, navigateByHints, stripHtmlAssets, googleSearch, extractAnchorCandidates, heuristicExtractContacts } from '@/server/utils/scrape'
import { selectRelevantLinks, extractContactsFromHtml, suggestNavigationForContacts, extractLinksFromSerpHtml, selectLinksFromCandidates } from '@/server/utils/ai'

type Body = { query: string; top?: number }

export default defineEventHandler(async (event) => {
    const body = await readBody<Body>(event)
    if (!body?.query || typeof body.query !== 'string') {
        throw createError({ statusCode: 400, statusMessage: 'query is required' })
    }
    const { GOOGLE_SEARCH_UA } = useRuntimeConfig()
    const limit = body.top && body.top > 0 ? Math.min(15, body.top) : 10

    const globalLogs: string[] = []
    const log = (msg: string) => {
        const line = `[${new Date().toISOString()}] ${msg}`
        globalLogs.push(line)
        // дублируем в серверные логи
        console.log(line)
    }

    log(`Старт запроса: "${body.query}" (top=${limit})`)

    log('Шаг 1: Поиск Google... (получаю HTML)')
    const serpHtml = await googleSearchHtml(body.query, GOOGLE_SEARCH_UA)
    const serpReduced = stripHtmlAssets(serpHtml.html)
    log('Шаг 2: Извлечение ссылок из HTML... (кандидаты)')
    const candidates = extractAnchorCandidates(serpReduced, serpHtml.url, 120)
    log(`Кандидатов ссылок: ${candidates.length}`)

    log('Шаг 2a: Отбор кандидатов через ИИ ...')
    const candidatesForAi = candidates.map(c => ({ url: c.url, title: c.title, snippet: '' }))
    const aiLinks = await selectLinksFromCandidates(body.query, candidatesForAi, 15)
    const toAbsolute = (u: string) => {
        try { return new URL(u, serpHtml.url).href } catch { return u }
    }
    let serp = aiLinks
        .map(l => ({ ...l, url: toAbsolute(l.url) }))
        .filter(l => /^https?:\/\//i.test(l.url))
        .slice(0, limit)
    log(`Шаг 2: ИИ выделил результатов: ${serp.length}`)
    if (!serp.length) {
        log('Шаг 2b: Пусто. Фоллбек извлечения по DOM (ограниченно)...')
        try {
            const serpFallback = await googleSearch(body.query, limit, GOOGLE_SEARCH_UA)
            serp = serpFallback
            log(`Фоллбек дал результатов: ${serp.length}`)
        } catch (e: any) {
            log(`Фоллбек не удался: ${e?.message || e}`)
        }
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

    const results: any[] = []
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
    for (const link of relevant) {
        const itemLogs: string[] = []
        const ilog = (m: string) => {
            const line = `[${new Date().toISOString()}] [${link.url}] ${m}`
            itemLogs.push(line)
            console.log(line)
        }

        ilog('Загрузка главной страницы...')
        // Отделяем API вызов и присваивание пустой строкой
        const html1 = await fetchHtml(link.url, GOOGLE_SEARCH_UA)

        ilog(`Страница загружена: ${html1.finalUrl} (status=${html1.status})`)

        const stripped1 = stripHtmlAssets(html1.html)
        const extraction1 = await extractContactsFromHtml(stripped1, html1.finalUrl)
        const heur1 = heuristicExtractContacts(stripped1, html1.finalUrl)
        const socialPairs1 = new Map<string, string>()
        for (const s of (extraction1.socials || [])) { if (s?.url) socialPairs1.set(s.url, s.platform || '') }
        for (const s of heur1.socials) { if (s?.url) socialPairs1.set(s.url, s.platform || '') }
        const merged1 = {
            emails: Array.from(new Set([...(extraction1.emails || []), ...heur1.emails])),
            phones: cleanPhones([...(extraction1.phones || []), ...heur1.phones]),
            socials: cleanSocials(Array.from(socialPairs1.entries()).map(([url, platform]) => ({ url, platform }))),
            contactPageHints: extraction1.contactPageHints || [],
        }
        ilog(`Первичная выжимка: emails=${merged1.emails.length}, phones=${merged1.phones.length}, socials=${merged1.socials.length}`)

        if (merged1.emails.length || merged1.phones.length || merged1.socials.length) {
            ilog('Контакты найдены на главной, сохраняю результат')
            results.push({ link, page: html1.finalUrl, contacts: merged1, logs: itemLogs })
            continue
        }

        const hints = extraction1.contactPageHints.length
            ? extraction1.contactPageHints
            : await suggestNavigationForContacts(html1.html, html1.finalUrl)

        ilog(`Переход по подсказкам (${hints.length}) для поиска контактов...`)
        const navigated = await navigateByHints(html1.finalUrl, hints, GOOGLE_SEARCH_UA)
        ilog(`Открыта страница: ${navigated.url}`)

        const stripped2 = stripHtmlAssets(navigated.html)
        const extraction2 = await extractContactsFromHtml(stripped2, navigated.url)
        const heur2 = heuristicExtractContacts(stripped2, navigated.url)
        const socialPairs2 = new Map<string, string>()
        for (const s of (extraction2.socials || [])) { if (s?.url) socialPairs2.set(s.url, s.platform || '') }
        for (const s of heur2.socials) { if (s?.url) socialPairs2.set(s.url, s.platform || '') }
        const merged2 = {
            emails: Array.from(new Set([...(extraction2.emails || []), ...heur2.emails])),
            phones: cleanPhones([...(extraction2.phones || []), ...heur2.phones]),
            socials: cleanSocials(Array.from(socialPairs2.entries()).map(([url, platform]) => ({ url, platform }))),
            contactPageHints: extraction2.contactPageHints || [],
        }
        ilog(`Повторная выжимка: emails=${merged2.emails.length}, phones=${merged2.phones.length}, socials=${merged2.socials.length}`)

        results.push({ link, page: navigated.url, contacts: merged2, hintsTried: hints, logs: itemLogs })
    }

    log(`Завершено. Возвращаю ${results.length} элементов.`)
    return { query: body.query, total: results.length, results, logs: globalLogs }
})


