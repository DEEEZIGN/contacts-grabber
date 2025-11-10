import puppeteer, { Browser, HTTPResponse, Page } from 'puppeteer'
import { join } from 'node:path'

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
    userDataDir?: string
}

let sharedBrowser: Browser | null = null
let activeBrowserKey: string | null = null
let isLaunching = false

const configToKey = (config: BrowserLaunchConfig) =>
    `${config.headless ? 'h1' : 'h0'}|${config.slowMo}|${config.devtools ? 'd1' : 'd0'}|${config.userDataDir ? 'p1' : 'p0'}`

async function getBrowser(config: BrowserLaunchConfig): Promise<Browser> {
    const key = configToKey(config)

    if (sharedBrowser && sharedBrowser.isConnected() && activeBrowserKey === key) {
        return sharedBrowser
    }

    // serialize concurrent launches
    while (isLaunching) {
        await delay(100)
        if (sharedBrowser && sharedBrowser.isConnected() && activeBrowserKey === key) {
            return sharedBrowser
        }
    }
    isLaunching = true

    if (sharedBrowser) {
        try {
            await sharedBrowser.close()
        } catch {
            // ignore
        }
        sharedBrowser = null
    }

    const profileDir = config.userDataDir || join(process.cwd(), 'data', 'chrome-profile')
    const baseOptions = {
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
        ] as string[],
    }

    try {
        sharedBrowser = await puppeteer.launch({
            ...baseOptions,
            userDataDir: profileDir,
        } as any)
        activeBrowserKey = key
        return sharedBrowser
    } catch (err: any) {
        const msg = String(err?.message || err)
        if (msg.includes('ProcessSingleton') || msg.includes('already running')) {
            isLaunching = false
            throw new Error(`Profile already in use for ${profileDir}. Please keep a single instance; close other Chrome with this profile or reuse the existing window.`)
        }
        isLaunching = false
        throw err
    } finally {
        isLaunching = false
    }

    // unreachable
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

// Browser-based personal account messaging helpers
export async function sendTelegramViaWeb(to: string, text: string, config: BrowserLaunchConfig): Promise<boolean> {
    const browser = await getBrowser(config)
    const page = await browser.newPage()
    await preparePage(page)
    const target = (() => {
        const raw = to.trim()
        if (raw.startsWith('@')) return raw.slice(1)
        try {
            const u = new URL(raw)
            if (/t\.me|telegram\.me/i.test(u.hostname)) {
                return u.pathname.replace(/^\//, '')
            }
        } catch { }
        return raw
    })()

    const tryOpenWeb = async (url: string) => {
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 90000 }).catch(() => null)
        // Wait for editor; if login is required, selector will not appear
        const editor = await page.waitForSelector('[contenteditable="true"]', { timeout: 12000 }).catch(() => null)
        return Boolean(editor)
    }

    let opened = false
    // Try direct Web Telegram variants first
    const webCandidates = [
        `https://web.telegram.org/k/#@${encodeURIComponent(target)}`,
        `https://web.telegram.org/a/#@${encodeURIComponent(target)}`,
        `https://web.telegram.org/#@${encodeURIComponent(target)}`,
    ]
    for (const u of webCandidates) {
        // eslint-disable-next-line no-await-in-loop
        if (await tryOpenWeb(u)) {
            opened = true
            break
        }
    }

    // If still not opened, go through t.me and click "Open in Web"
    if (!opened) {
        await page.goto(`https://t.me/${encodeURIComponent(target)}`, { waitUntil: 'networkidle2', timeout: 90000 }).catch(() => null)
        // Find anchor by innerText on the page
        await page.evaluate(() => {
            const texts = ['Open in Web', 'Открыть в вебе', 'Open Web', 'Open Telegram Web']
            const links = Array.from(document.querySelectorAll('a')) as HTMLAnchorElement[]
            const cand = links.find(a => {
                const t = (a.innerText || a.textContent || '').trim()
                return texts.some(x => t.includes(x)) || /web\.telegram\.org/i.test(a.href)
            })
            if (cand) {
                cand.target = '_self'
                cand.click()
            }
        })
        // Wait and then try web again
        for (const u of webCandidates) {
            // eslint-disable-next-line no-await-in-loop
            if (await tryOpenWeb(u)) {
                opened = true
                break
            }
        }
    }

    if (!opened) {
        await closePageSafe(page)
        return false
    }

    // Focus composer and send
    const editor = await page.$('[contenteditable="true"]')
    if (!editor) {
        await closePageSafe(page)
        return false
    }
    await editor.focus()
    await page.keyboard.type(text, { delay: 20 })
    await page.keyboard.press('Enter')
    await closePageSafe(page)
    return true
}

export async function sendWhatsAppViaWeb(to: string, text: string, config: BrowserLaunchConfig): Promise<boolean> {
    const browser = await getBrowser(config)
    const page = await browser.newPage()
    await preparePage(page)
    const digits = to.replace(/[^0-9]/g, '')
    // Start with wa.me, it will redirect to web.whatsapp.com
    await page.goto(`https://wa.me/${digits}?text=${encodeURIComponent(text)}`, { waitUntil: 'networkidle2', timeout: 90000 }).catch(() => null)
    // Click "Continue to Chat" if present
    try {
        const cont = await page.$('a#action-button, a:has-text("Continue to Chat"), a:has-text("Перейти к чату")')
        if (cont) {
            await Promise.all([
                page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 90000 }).catch(() => null),
                cont.click(),
            ])
        }
    } catch { }
    // On web.whatsapp.com, wait for editor and send (text already passed may be prefilled)
    try {
        const editor = await page.waitForSelector('[contenteditable="true"]', { timeout: 20000 })
        if (!editor) return false
        await editor.focus()
        // If not prefilled, type text
        const pageText = await page.evaluate(() => document.body?.innerText || '')
        if (!pageText.includes(text)) {
            await page.keyboard.type(text, { delay: 20 })
        }
        await page.keyboard.press('Enter')
        return true
    } catch {
        return false
    } finally {
        await closePageSafe(page)
    }
}

export async function sendVkViaWeb(to: string, text: string, config: BrowserLaunchConfig): Promise<boolean> {
    const browser = await getBrowser(config)
    const page = await browser.newPage()
    await preparePage(page)
    const clean = to.replace(/^https?:\/\/(?:www\.)?vk\.com\//i, '')
    // Try direct IM link first
    await page.goto(`https://vk.com/im?sel=${encodeURIComponent(clean)}`, { waitUntil: 'networkidle2', timeout: 90000 }).catch(() => null)
    // If not on IM page, open profile then click "Написать сообщение"
    if (!/vk\.com\/im\?sel=/i.test(page.url())) {
        await page.goto(`https://vk.com/${encodeURIComponent(clean)}`, { waitUntil: 'networkidle2', timeout: 90000 }).catch(() => null)
        try {
            const msgBtn = await page.waitForSelector('a[aria-label*="Сообщение"], a[aria-label*="Написать"], button:has-text("Написать")', { timeout: 15000 })
            if (msgBtn) {
                await Promise.all([
                    page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 90000 }).catch(() => null),
                    msgBtn.click(),
                ])
            }
        } catch { }
    }
    // Type and send
    try {
        const editor = await page.waitForSelector('[contenteditable="true"]', { timeout: 20000 })
        if (!editor) return false
        await editor.focus()
        await page.keyboard.type(text, { delay: 20 })
        await page.keyboard.press('Enter')
        return true
    } catch {
        return false
    } finally {
        await closePageSafe(page)
    }
}

