import { fetchHistory } from '@/server/utils/db'

export default defineEventHandler(() => {
    const items = fetchHistory(50)

    return { items }
})


