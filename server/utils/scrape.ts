import puppeteer, { Browser, HTTPResponse, Page } from 'puppeteer'

export type SearchResult = {
    url: string
    title: string
    snippet: string
}

export function stripHtmlAssets(html: string): string {
    try {
        // Remove <script>, <style>, <noscript>, comments
        return html
            .replace(/<script[\s\S]*?<\/script>/gi, '')
            .replace(/<style[\s\S]*?<\/style>/gi, '')
            .replace(/<noscript[\s\S]*?<\/noscript>/gi, '')
            .replace(/<!--([\s\S]*?)-->/g, '')
            .replace(/\s{2,}/g, ' ')
    } catch {
        return html
    }
}

function normalizeUrl(href: string, base: string): string | null {
    try {
        const abs = new URL(href, base).href
        if (!/^https?:\/\//i.test(abs)) return null
        // filter obvious google internal/navigation links
        const bad = [
            'google.com/preferences', '/preferences', '/setprefs', '/sorry', '/imgres', '/search?', '/maps/preview',
            'accounts.google.', 'consent.google.', 'support.google.', 'policies.google.'
        ]
        if (bad.some(b => abs.includes(b))) return null
        return abs
    } catch { return null }
}

export function extractAnchorCandidates(html: string, baseUrl: string, max = 100): { url: string; title: string }[] {
    const out: { url: string; title: string }[] = []
    // very lightweight extraction: <a href="...">text</a>
    const re = /<a\s+[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi
    let m: RegExpExecArray | null
    while ((m = re.exec(html)) && out.length < max) {
        const href = m[1]
        const inner = m[2] || ''
        const text = inner.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
        const abs = normalizeUrl(href, baseUrl)
        if (!abs) continue
        if (!text) continue
        out.push({ url: abs, title: text.slice(0, 180) })
    }
    // de-dup by url
    const seen = new Set<string>()
    return out.filter(c => (seen.has(c.url) ? false : (seen.add(c.url), true)))
}

export function heuristicExtractContacts(html: string, baseUrl: string): {
    emails: string[]
    phones: string[]
    socials: { platform: string; url: string }[]
} {
    const emailsSet = new Set<string>()
    const normalizedPhoneToDisplay = new Map<string, string>()
    const socialsSet = new Map<string, string>() // url -> platform

    // Emails
    const emailRe = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi
    let m: RegExpExecArray | null
    while ((m = emailRe.exec(html))) {
        emailsSet.add(m[0])
    }

    // Helper: normalize to digits with leading + if present
    const normalizePhone = (s: string): string => {
        const plus = s.trim().startsWith('+')
        const digits = s.replace(/[^0-9]/g, '')
        return plus ? `+${digits}` : digits
    }
    const looksLikePhone = (display: string): boolean => {
        const hasDot = display.includes('.')
        if (hasDot) return false // coords, amounts
        if (/\d{4}-\d{2}-\d{2}/.test(display)) return false // dates
        if (/\b(\d{4}-){3}\d{3,4}\b/.test(display)) return false // card-like
        const norm = normalizePhone(display)
        const digitsOnly = norm.startsWith('+') ? norm.slice(1) : norm
        const len = digitsOnly.length
        if (len < 10 || len > 15) return false
        if (!norm.startsWith('+') && !/^7|8/.test(digitsOnly)) return false
        return true
    }
    const storePhone = (display: string) => {
        if (!looksLikePhone(display)) return
        const norm = normalizePhone(display)
        if (!normalizedPhoneToDisplay.has(norm)) {
            normalizedPhoneToDisplay.set(norm, display)
        }
    }
    // Phones via tel:
    const telHrefRe = /<a\s+[^>]*href=["']tel:([^"']+)["'][^>]*>/gi
    while ((m = telHrefRe.exec(html))) {
        const raw = m[1].trim().replace(/^\+/, '+')
        storePhone(raw)
    }
    // NOTE: не собираем телефоны из произвольного текста, чтобы исключить шум

    // Socials
    const socialPatterns: { platform: string; test: RegExp }[] = [
        { platform: 'vk', test: /https?:\/\/(?:www\.)?vk\.com\/[A-Za-z0-9_./-]+/gi },
        { platform: 'telegram', test: /https?:\/\/(?:t\.me|telegram\.me)\/[A-Za-z0-9_./-]+/gi },
        { platform: 'whatsapp', test: /https?:\/\/(?:wa\.me|api\.whatsapp\.com)\/[A-Za-z0-9_?=&#%-]+/gi },
        { platform: 'instagram', test: /https?:\/\/(?:www\.)?instagram\.com\/[A-Za-z0-9_./-]+/gi },
        { platform: 'facebook', test: /https?:\/\/(?:www\.)?facebook\.com\/[A-Za-z0-9_./-]+/gi },
    ]
    for (const { platform, test } of socialPatterns) {
        let mm: RegExpExecArray | null
        while ((mm = test.exec(html))) {
            socialsSet.set(mm[0], platform)
        }
    }

    const socials = Array.from(socialsSet.entries()).map(([url, platform]) => ({ platform, url }))
    const phones = Array.from(normalizedPhoneToDisplay.values())
    return { emails: Array.from(emailsSet), phones, socials }
}

async function launchBrowser(): Promise<Browser> {
  const { PUPPETEER_HEADLESS, PUPPETEER_SLOWMO, PUPPETEER_DEVTOOLS } = useRuntimeConfig()
  const headless = String(PUPPETEER_HEADLESS).toLowerCase() !== 'false'
  const slowMo = Number(PUPPETEER_SLOWMO) || 0
  const devtools = String(PUPPETEER_DEVTOOLS).toLowerCase() === 'true'

  const browser = await puppeteer.launch({
    headless,
    slowMo,
    devtools,
    dumpio: true,
    executablePath: puppeteer.executablePath(),
    ignoreDefaultArgs: ['--enable-external-memory-accounted-in-global-limit'],
    protocolTimeout: 60000,
    args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-gpu',
            '--lang=ru-RU,ru',
            '--disable-blink-features=AutomationControlled',
            '--window-size=1366,768',
        ],
    })
    return browser
}

export async function googleSearch(query: string, limit = 10, userAgent?: string): Promise<SearchResult[]> {
    const browser = await launchBrowser()
    const page = await browser.newPage()
    try {
    if (userAgent) await page.setUserAgent(userAgent)
    await page.setViewport({ width: 1366, height: 768 })
    page.setDefaultNavigationTimeout(60000)
    page.setDefaultTimeout(30000)
    const q = encodeURIComponent(query)
    await page.goto(`https://www.google.com/search?q=${q}&hl=ru`, { waitUntil: 'networkidle2', timeout: 60000 })

        // Accept cookies if banner exists
        try {
            await page.waitForSelector('button[aria-label="Принять все"], form [role="none"] button, #L2AGLb', { timeout: 4000 })
            const accepted = await page.evaluate(() => {
                const sel = document.querySelector('button[aria-label="Принять все"]')
                  || document.querySelector('#L2AGLb')
                  || document.querySelector('form [role="none"] button')
                if (sel instanceof HTMLElement) { sel.click(); return true }
                return false
            })
            if (accepted) {
                try { await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 10000 }) } catch {}
            }
        } catch { }

        await page.waitForSelector('a h3, div.g', { timeout: 30000 })
        const results = await page.evaluate((max) => {
            const items: { url: string; title: string; snippet: string }[] = []
            const blocks = document.querySelectorAll('div.g')
            for (const block of Array.from(blocks)) {
                const a = block.querySelector('a') as HTMLAnchorElement | null
                const h3 = block.querySelector('h3') as HTMLElement | null
                const desc = block.querySelector('div[style="-webkit-line-clamp:2"]') as HTMLElement | null
                if (a && h3 && a.href.startsWith('http')) {
                    items.push({ url: a.href, title: h3.textContent || '', snippet: desc?.textContent || '' })
                }
                if (items.length >= max) break
            }
            return items
        }, limit)
        return results
    } finally {
        await browser.close()
    }
}

export async function googleSearchHtml(query: string, userAgent?: string): Promise<{ html: string; url: string }> {
    const browser = await launchBrowser()
    const page = await browser.newPage()
    try {
        if (userAgent) await page.setUserAgent(userAgent)
        await page.setViewport({ width: 1366, height: 768 })
        page.setDefaultNavigationTimeout(60000)
        const q = encodeURIComponent(query)
        await page.goto(`https://www.google.com/search?q=${q}&hl=ru`, { waitUntil: 'networkidle2', timeout: 60000 })
        try {
            await page.waitForSelector('body', { timeout: 10000 })
        } catch {}
        const html = await page.content()
        return { html, url: page.url() }
    } finally {
        await browser.close()
    }
}

export async function fetchHtml(url: string, userAgent?: string): Promise<{ html: string; status: number | null; finalUrl: string }> {
    const browser = await launchBrowser()
    const page = await browser.newPage()
    let response: HTTPResponse | null = null
    try {
    if (userAgent) await page.setUserAgent(userAgent)
    page.setDefaultNavigationTimeout(90000)
    page.setDefaultTimeout(45000)
    response = await page.goto(url, { waitUntil: 'networkidle2', timeout: 90000 })
        const html = await page.content()
        const finalUrl = page.url()
        const status = response ? response.status() : null
        return { html, status, finalUrl }
    } finally {
        await browser.close()
    }
}

export async function navigateByHints(url: string, hints: string[], userAgent?: string): Promise<{ html: string; url: string }> {
    const browser = await launchBrowser()
    const page: Page = await browser.newPage()
    try {
    if (userAgent) await page.setUserAgent(userAgent)
    page.setDefaultNavigationTimeout(90000)
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 90000 })

        for (const hint of hints) {
            const lowered = hint.toLowerCase()
            const clicked = await page.evaluate((h) => {
                const anchors = Array.from(document.querySelectorAll('a')) as HTMLAnchorElement[]
                const candidates = anchors.filter(a => {
                    const text = (a.textContent || '').trim().toLowerCase()
                    const href = (a.getAttribute('href') || '').toLowerCase()
                    return text.includes(h) || href.includes('contact') || href.includes('kontact') || href.includes('contacts') || href.includes('контакт')
                })
                if (candidates[0]) {
                    candidates[0].click()
                    return true
                }
                return false
            }, lowered)
            if (clicked) {
                try {
                    await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 30000 })
                } catch { }
                break
            }
        }

        const html = await page.content()
        return { html, url: page.url() }
    } finally {
        await browser.close()
    }
}


