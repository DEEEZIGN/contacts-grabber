import { saveSettings, type AppSettings } from '@/server/utils/settings'

export default defineEventHandler(async (event) => {
    const body = await readBody<Partial<AppSettings>>(event)
    const updated = saveSettings(body || {})
    return { settings: updated }
})


