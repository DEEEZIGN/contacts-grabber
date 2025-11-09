import { fetchHistoryEntry } from '@/server/utils/db'

export default defineEventHandler((event) => {
    const idParam = getRouterParam(event, 'id')

    if (!idParam) {
        throw createError({ statusCode: 400, statusMessage: 'id is required' })
    }

    const id = Number.parseInt(idParam, 10)

    if (!Number.isFinite(id)) {
        throw createError({ statusCode: 400, statusMessage: 'id must be a number' })
    }

    const entry = fetchHistoryEntry(id)

    if (!entry) {
        throw createError({ statusCode: 404, statusMessage: 'history item not found' })
    }

    return entry
})


