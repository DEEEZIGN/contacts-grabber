import OpenAI from 'openai'

export type LinkSummary = {
    url: string
    title: string
    snippet: string
}

export type FilteredLink = LinkSummary & { relevant: boolean; reason: string }

export type ContactExtraction = {
    emails: string[]
    phones: string[]
    socials: { platform: string; url: string }[]
    contactPageHints: string[]
}

function getClient() {
    const { OPENAI_API_KEY, PROXYAPI_API_KEY, PROXYAPI_BASE_URL } = useRuntimeConfig()
    const apiKey = PROXYAPI_API_KEY || OPENAI_API_KEY
    if (!apiKey) {
        throw new Error('API key is not set (PROXYAPI_API_KEY or OPENAI_API_KEY)')
    }
    const baseURL = PROXYAPI_BASE_URL || undefined
    return new OpenAI({ apiKey, baseURL })
}

export async function selectRelevantLinks(query: string, links: LinkSummary[]): Promise<FilteredLink[]> {
    const client = getClient()
    const system = `You are a precise research assistant. Given a search intent and a list of search results, mark which links are relevant to the intent.
Rules:
- Prefer DIRECT company/organization websites for the intent.
- INCLUDE official company pages on social networks (vk/telegram/instagram/facebook) when they represent the specific company (not generic categories).
- INCLUDE company pages on ORGS-like business cards if they are for the specific company.
- EXCLUDE general aggregators/directories/maps or generic category pages (examples: google, 2gis, yandex maps/search, tripadvisor, profi.ru, flamp, kudatumen) unless the page is a specific company profile.
- Keep only direct matches.`
    const user = [
        `Intent: ${query}`,
        'Results:',
        ...links.map((l, i) => `${i + 1}. ${l.title} | ${l.url}\n${l.snippet}`),
        '',
        'Respond as JSON array of objects: {url,title,snippet,relevant:boolean,reason} with the same order.',
    ].join('\n')

    const res = await client.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
            { role: 'system', content: system },
            { role: 'user', content: user },
        ],
        temperature: 0.2,
    })

    const content = res.choices[0]?.message?.content || '[]'
    try {
        const parsed = JSON.parse(content) as FilteredLink[]
        return parsed
    } catch {
        return links.map(l => ({ ...l, relevant: true, reason: 'fallback' }))
    }
}

export async function extractContactsFromHtml(html: string, url: string): Promise<ContactExtraction> {
    const client = getClient()
    const system = `You extract contacts from raw HTML. Respond strictly as json object. Return structured contacts and hints where a contact/contacts link might be located.
Keys: emails[], phones[], socials[{platform,url}], contactPageHints[].
Phones: ONLY real phone numbers (no dates, ids, coordinates, order numbers). Keep human-readable formatting, but do NOT include 'tel:' prefix.
Include social links (vk/telegram/whatsapp/instagram/facebook) with platform and absolute url.`
    const user = `Return json only. URL: ${url}\nHTML:\n${html.slice(0, 120000)}`

    const res = await client.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
            { role: 'system', content: system },
            { role: 'user', content: user },
        ],
        temperature: 0.2,
        response_format: { type: 'json_object' },
    })

    const content = res.choices[0]?.message?.content || '{}'
    try {
        const parsed = JSON.parse(content)
        return {
            emails: parsed.emails || [],
            phones: parsed.phones || [],
            socials: parsed.socials || [],
            contactPageHints: parsed.contactPageHints || [],
        }
    } catch {
        return { emails: [], phones: [], socials: [], contactPageHints: [] }
    }
}

export async function suggestNavigationForContacts(html: string, url: string): Promise<string[]> {
    const client = getClient()
    const system = `Given a page HTML, suggest link texts, hrefs, or steps to navigate to a contacts page. Return up to 5 actionable hints.`
    const user = `URL: ${url}\nHTML:\n${html.slice(0, 20000)}`
    const res = await client.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
            { role: 'system', content: system },
            { role: 'user', content: user },
        ],
        temperature: 0.2,
    })
    const content = res.choices[0]?.message?.content || ''
    return content
        .split('\n')
        .map(s => s.trim())
        .filter(Boolean)
        .slice(0, 5)
}

export async function extractLinksFromSerpHtml(query: string, html: string): Promise<LinkSummary[]> {
    const client = getClient()
    const system = `You extract ORGANIC results from raw Google SERP HTML.
Rules:
- Ignore ads, shopping, videos, carousels, people-also-ask, maps, social-only.
- Prefer blocks with <h3> and an <a href> HTTP(S) URL.
- Title = text of <h3>, Snippet = nearby descriptive text if present.
Output JSON ONLY with key "items": [{url,title,snippet}], max 15.`
    const user = [
        `Intent: ${query}`,
        `HTML (truncated):`,
        html.slice(0, 60000),
    ].join('\n')

    const res = await client.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
            { role: 'system', content: system },
            { role: 'user', content: user },
        ],
        temperature: 0.2,
        response_format: { type: 'json_object' },
    })
    const content = res.choices[0]?.message?.content || '{"items":[]}'
    try {
        const parsed = JSON.parse(content)
        const items = (parsed.items || []) as LinkSummary[]
        return items.filter(x => x?.url)
    } catch {
        return []
    }
}

export async function selectLinksFromCandidates(query: string, candidates: LinkSummary[], maxItems = 15): Promise<LinkSummary[]> {
    const client = getClient()
    const system = `You will be given a search intent and a list of CANDIDATE links already extracted from the same HTML.
Choose only from the provided candidates. Do NOT invent new links. Return JSON with key "items": [{url,title,snippet}] with up to ${maxItems} items.`
    const user = JSON.stringify({ intent: query, candidates: candidates })

    const res = await client.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
            { role: 'system', content: system },
            { role: 'user', content: user },
        ],
        temperature: 0.2,
        response_format: { type: 'json_object' },
    })
    const content = res.choices[0]?.message?.content || '{"items":[]}'
    try {
        const parsed = JSON.parse(content)
        const items = (parsed.items || []) as LinkSummary[]
        // keep only urls present in candidates
        const allowed = new Set(candidates.map(c => c.url))
        return items.filter(x => allowed.has(x.url)).slice(0, maxItems)
    } catch {
        return []
    }
}


