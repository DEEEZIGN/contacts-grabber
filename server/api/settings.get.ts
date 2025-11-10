import { getSettings } from '@/server/utils/settings'

export default defineEventHandler(async () => {
    const settings = getSettings()
    return { settings }
})


