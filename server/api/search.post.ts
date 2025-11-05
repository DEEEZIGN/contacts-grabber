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
            socials: Array.from(socialPairs1.entries()).map(([url, platform]) => ({ url, platform })),
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
            socials: Array.from(socialPairs2.entries()).map(([url, platform]) => ({ url, platform })),
            contactPageHints: extraction2.contactPageHints || [],
        }
        ilog(`Повторная выжимка: emails=${merged2.emails.length}, phones=${merged2.phones.length}, socials=${merged2.socials.length}`)

        results.push({ link, page: navigated.url, contacts: merged2, hintsTried: hints, logs: itemLogs })
    }

    log(`Завершено. Возвращаю ${results.length} элементов.`)
    return { query: body.query, total: results.length, results, logs: globalLogs }
})


