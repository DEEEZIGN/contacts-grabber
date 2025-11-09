import { listTemplates } from '@/server/utils/templates'

export default defineEventHandler(() => {
    return listTemplates()
})


