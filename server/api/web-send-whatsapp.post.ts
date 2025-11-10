import { sendWhatsAppViaWeb, type BrowserLaunchConfig } from '@/server/utils/scrape'

type Body = { to: string; text: string }

export default defineEventHandler(async (event) => {
    const body = await readBody<Body>(event)
    if (!body?.to || !body?.text) {
        throw createError({ statusCode: 400, statusMessage: 'to and text are required' })
    }
    const runtimeConfig = useRuntimeConfig()
    const browserConfig: BrowserLaunchConfig = {
        headless: String(runtimeConfig.PUPPETEER_HEADLESS).toLowerCase() !== 'false',
        slowMo: Number(runtimeConfig.PUPPETEER_SLOWMO) || 0,
        devtools: String(runtimeConfig.PUPPETEER_DEVTOOLS).toLowerCase() === 'true',
    }
    const ok = await sendWhatsAppViaWeb(body.to, body.text, browserConfig)
    return { ok }
})


