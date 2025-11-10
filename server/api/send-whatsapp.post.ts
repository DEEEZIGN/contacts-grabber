import { getSettings } from '@/server/utils/settings'

type Body = {
    to: string
    text: string
}

export default defineEventHandler(async (event) => {
    const body = await readBody<Body>(event)
    if (!body?.to || !body?.text) {
        throw createError({ statusCode: 400, statusMessage: 'to and text required' })
    }
    const settings = getSettings()
    const token = settings.whatsapp?.accessToken
    const phoneNumberId = settings.whatsapp?.phoneNumberId
    if (!token || !phoneNumberId) {
        throw createError({ statusCode: 400, statusMessage: 'WhatsApp settings missing (accessToken, phoneNumberId)' })
    }

    const url = `https://graph.facebook.com/v19.0/${phoneNumberId}/messages`
    const res = await $fetch(url, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: {
            messaging_product: 'whatsapp',
            to: body.to,
            type: 'text',
            text: { body: body.text },
        },
    }).catch((e: any) => ({ error: e?.data || e?.message }))

    return res
})


