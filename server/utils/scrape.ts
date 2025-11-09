import puppeteer, { Browser, HTTPResponse, Page } from 'puppeteer'

export type SearchResult = {
    url: string
    title: string
    snippet: string
}

export type SearchHtmlPage = {
    page: number
    html: string
    url: string
}

export type BrowserLaunchConfig = {
    headless: boolean
    slowMo: number
    devtools: boolean
}

let sharedBrowser: Browser | null = null
let activeBrowserKey: string | null = null

const configToKey = (config: BrowserLaunchConfig) =>
    `${config.headless ? 'h1' : 'h0'}|${config.slowMo}|${config.devtools ? 'd1' : 'd0'}`

async function getBrowser(config: BrowserLaunchConfig): Promise<Browser> {
    const key = configToKey(config)

    if (sharedBrowser && sharedBrowser.isConnected() && activeBrowserKey === key) {
        return sharedBrowser
    }

    if (sharedBrowser) {
        try {
            await sharedBrowser.close()
        } catch {
            // ignore
        }
        sharedBrowser = null
    }

    sharedBrowser = await puppeteer.launch({
        headless: config.headless,
        slowMo: config.slowMo,
        devtools: config.devtools,
        dumpio: true,
        executablePath: puppeteer.executablePath(),
        ignoreDefaultArgs: ['--enable-external-memory-accounted-in-global-limit'],
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

    activeBrowserKey = key

    return sharedBrowser
}

export async function closeSharedBrowser(): Promise<void> {
    if (!sharedBrowser) {
        return
    }

    try {
        await sharedBrowser.close()
    } finally {
        sharedBrowser = null
    }
}

async function preparePage(page: Page, userAgent?: string) {
    if (userAgent) {
        await page.setUserAgent(userAgent)
    }

    await page.setViewport({ width: 1366, height: 768 })
    page.setDefaultNavigationTimeout(90000)
    page.setDefaultTimeout(60000)
}

async function tryAcceptCookies(page: Page) {
    try {
        const button = await page.waitForSelector(
            'button[aria-label="Принять все"], #L2AGLb, form [role="none"] button',
            { timeout: 4000 },
        )

        if (button) {
            await Promise.all([
                page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 15000 }).catch(() => undefined),
                button.click(),
            ])
        }
    } catch {
        // ignore
    }
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function googleSearchHtmlPages(
    query: string,
    pages = 1,
    userAgent: string | undefined,
    config: BrowserLaunchConfig,
): Promise<SearchHtmlPage[]> {
    const browser = await getBrowser(config)
    const page = await browser.newPage()
    await preparePage(page, userAgent)

    const q = encodeURIComponent(query)
    await page.goto(`https://www.google.com/search?q=${q}&hl=ru`, { waitUntil: 'networkidle2', timeout: 60000 })
    await tryAcceptCookies(page)

    const collected: SearchHtmlPage[] = []

    for (let current = 1; current <= pages; current += 1) {
        await delay(500)
        const html = await page.content()
        collected.push({ page: current, html, url: page.url() })

        if (current === pages) {
            break
        }

        const nextSelector = 'a#pnnext, a[aria-label="Следующая страница"], a[aria-label="Next"], a[aria-label="Next page"]'
        const nextHandle = await page.$(nextSelector)
        if (!nextHandle) {
            break
        }

        const navigation = page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 60000 }).catch(() => null)

        await nextHandle.click()

        const navigated = await navigation
        if (!navigated) {
            break
        }
    }

    return collected
}

export async function fetchHtmlPage(
    url: string,
    userAgent: string | undefined,
    config: BrowserLaunchConfig,
): Promise<{ page: Page; html: string; status: number | null; finalUrl: string }> {
    const browser = await getBrowser(config)
    const page = await browser.newPage()
    await preparePage(page, userAgent)

    let response: HTTPResponse | null = null

    response = await page.goto(url, { waitUntil: 'networkidle2', timeout: 90000 })
    const html = await page.content()
    const finalUrl = page.url()
    const status = response ? response.status() : null

    return { page, html, status, finalUrl }
}

export async function navigatePageByHints(page: Page, hints: string[]): Promise<{ html: string; url: string }> {
    for (const hint of hints) {
        const lowered = hint.toLowerCase()

        const clicked = await page.evaluate((needle) => {
            const anchors = Array.from(document.querySelectorAll('a')) as HTMLAnchorElement[]
            const candidates = anchors.filter((a) => {
                const text = (a.textContent || '').trim().toLowerCase()
                const href = (a.getAttribute('href') || '').toLowerCase()
                return (
                    text.includes(needle)
                    || href.includes('contact')
                    || href.includes('kontact')
                    || href.includes('contacts')
                    || href.includes('контакт')
                )
            })

            if (candidates[0]) {
                candidates[0].click()
                return true
            }

            return false
        }, lowered)

        if (clicked) {
            try {
                await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 45000 })
            } catch {
                // ignore
            }
            break
        }
    }

    const html = await page.content()
    return { html, url: page.url() }
}

export async function closePageSafe(page: Page | null | undefined) {
    if (!page) {
        return
    }
    try {
        await page.close()
    } catch {
        // ignore
    }
}

export function stripHtmlAssets(html: string): string {
    try {
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
        if (!/^https?:\/\//i.test(abs)) {
            return null
        }

        const bad = [
            'google.com/preferences',
            '/preferences',
            '/setprefs',
            '/sorry',
            '/imgres',
            '/search?',
            '/maps/preview',
            'accounts.google.',
            'consent.google.',
            'support.google.',
            'policies.google.',
        ]

        if (bad.some((b) => abs.includes(b))) {
            return null
        }

        return abs
    } catch {
        return null
    }
}

export function extractAnchorCandidates(html: string, baseUrl: string, max = 100): { url: string; title: string }[] {
    const out: { url: string; title: string }[] = []
    const re = /<a\s+[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi
    let match: RegExpExecArray | null

    while ((match = re.exec(html)) && out.length < max) {
        const href = match[1]
        const inner = match[2] || ''
        const text = inner.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
        const abs = normalizeUrl(href, baseUrl)

        if (!abs || !text) {
            continue
        }

        out.push({ url: abs, title: text.slice(0, 180) })
    }

    const seen = new Set<string>()
    return out.filter((candidate) => {
        if (seen.has(candidate.url)) {
            return false
        }
        seen.add(candidate.url)
        return true
    })
}

export function heuristicExtractContacts(html: string, _baseUrl: string): {
    emails: string[]
    phones: string[]
    socials: { platform: string; url: string }[]
} {
    const emailsSet = new Set<string>()
    const normalizedPhoneToDisplay = new Map<string, string>()
    const socialsSet = new Map<string, string>()

    const emailRe = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi
    let match: RegExpExecArray | null

    while ((match = emailRe.exec(html))) {
        emailsSet.add(match[0])
    }

    const normalizePhone = (value: string) => {
        const plus = value.trim().startsWith('+')
        const digits = value.replace(/[^0-9]/g, '')
        return plus ? `+${digits}` : digits
    }

    const looksLikePhone = (display: string): boolean => {
        if (display.includes('.')) {
            return false
        }
        if (/\d{4}-\d{2}-\d{2}/.test(display)) {
            return false
        }
        if (/\b(\d{4}-){3}\d{3,4}\b/.test(display)) {
            return false
        }

        const normalized = normalizePhone(display)
        const digitsOnly = normalized.startsWith('+') ? normalized.slice(1) : normalized
        const length = digitsOnly.length

        if (length < 10 || length > 15) {
            return false
        }

        if (!normalized.startsWith('+') && !/^7|8/.test(digitsOnly)) {
            return false
        }

        return true
    }

    const storePhone = (display: string) => {
        if (!looksLikePhone(display)) {
            return
        }

        const normalized = normalizePhone(display)

        if (!normalizedPhoneToDisplay.has(normalized)) {
            normalizedPhoneToDisplay.set(normalized, display)
        }
    }

    const telHrefRe = /<a\s+[^>]*href=["']tel:([^"']+)["'][^>]*>/gi
    while ((match = telHrefRe.exec(html))) {
        const raw = match[1].trim().replace(/^\+/, '+')
        storePhone(raw)
    }

    const socialPatterns: { platform: string; test: RegExp }[] = [
        { platform: 'vk', test: /https?:\/\/(?:www\.)?vk\.com\/[A-Za-z0-9_./-]+/gi },
        { platform: 'telegram', test: /https?:\/\/(?:t\.me|telegram\.me)\/[A-Za-z0-9_./-]+/gi },
        { platform: 'whatsapp', test: /https?:\/\/(?:wa\.me|api\.whatsapp\.com)\/[A-Za-z0-9_?=&#%-]+/gi },
        { platform: 'instagram', test: /https?:\/\/(?:www\.)?instagram\.com\/[A-Za-z0-9_./-]+/gi },
        { platform: 'facebook', test: /https?:\/\/(?:www\.)?facebook\.com\/[A-Za-z0-9_./-]+/gi },
    ]

    for (const { platform, test } of socialPatterns) {
        let socialMatch: RegExpExecArray | null
        while ((socialMatch = test.exec(html))) {
            socialsSet.set(socialMatch[0], platform)
        }
    }

    const socials = Array.from(socialsSet.entries()).map(([url, platform]) => ({ platform, url }))
    const phones = Array.from(normalizedPhoneToDisplay.values())

    return {
        emails: Array.from(emailsSet),
        phones,
        socials,
    }
}

