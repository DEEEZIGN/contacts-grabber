import { upsertTemplate } from '@/server/utils/templates'

type Body = {
    id: string
    name: string
    subject: string
    body: string
}

export default defineEventHandler(async (event) => {
    const body = await readBody<Body>(event)
    if (!body?.id || !body?.name) {
        throw createError({ statusCode: 400, statusMessage: 'id and name are required' })
    }
    const saved = upsertTemplate({
        id: body.id,
        name: body.name,
        subject: body.subject || '',
        body: body.body || '',
        file: undefined,
    })
    return saved
})


