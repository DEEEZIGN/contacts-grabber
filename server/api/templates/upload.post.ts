import { randomUUID } from 'node:crypto'
import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { getUploadsDir, saveFileTemplate } from '@/server/utils/templates'

export default defineEventHandler(async (event) => {
    const form = await readMultipartFormData(event)
    if (!form) {
        throw createError({ statusCode: 400, statusMessage: 'multipart form-data required' })
    }
    const file = form.find((f) => f.type === 'file')
    const nameField = form.find((f) => f.name === 'name' && f.type === 'text')
    const idField = form.find((f) => f.name === 'id' && f.type === 'text')
    if (!file || !file.filename || !file.data) {
        throw createError({ statusCode: 400, statusMessage: 'file is required' })
    }
    const id = idField?.data?.toString('utf-8') || randomUUID()
    const name = nameField?.data?.toString('utf-8') || file.filename
    const uploads = getUploadsDir()
    const storedName = `${id}-${Date.now()}-${file.filename}`
    const target = join(uploads, storedName)
    writeFileSync(target, file.data)
    const saved = saveFileTemplate({
        id,
        name,
        filename: storedName,
        originalName: file.filename,
        mime: file.type || 'application/octet-stream',
    })
    return saved
})


