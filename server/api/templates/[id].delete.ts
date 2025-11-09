import { deleteTemplate } from '@/server/utils/templates'

export default defineEventHandler((event) => {
    const id = getRouterParam(event, 'id')
    if (!id) {
        throw createError({ statusCode: 400, statusMessage: 'id is required' })
    }
    const ok = deleteTemplate(id)
    if (!ok) {
        throw createError({ statusCode: 404, statusMessage: 'template not found' })
    }
    return { ok: true }
})


