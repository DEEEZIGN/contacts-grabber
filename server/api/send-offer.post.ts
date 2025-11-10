import nodemailer from 'nodemailer'
import { listTemplates } from '@/server/utils/templates'
import { join } from 'node:path'
import { getSettings } from '@/server/utils/settings'

type Body = {
    emails: string[]
    subject?: string
    templateId?: string
    body?: string
}

export default defineEventHandler(async (event) => {
    const body = await readBody<Body>(event)
    if (!body?.emails?.length) {
        throw createError({ statusCode: 400, statusMessage: 'emails required' })
    }

    // Prefer saved settings, fallback to runtimeConfig
    const saved = getSettings()
    const cfg = useRuntimeConfig()
    const host = (saved.smtp?.host as string) || (cfg.SMTP_HOST as string)
    const port = Number(saved.smtp?.port ?? cfg.SMTP_PORT ?? 587)
    const user = (saved.smtp?.user as string) || (cfg.SMTP_USER as string)
    const pass = (saved.smtp?.pass as string) || (cfg.SMTP_PASS as string)
    const secure = Boolean(saved.smtp?.secure ?? (String(cfg.SMTP_SECURE || 'false').toLowerCase() === 'true'))
    const from = (saved.smtp?.from as string) || (cfg.SMTP_FROM as string) || user

    if (!host || !user || !pass) {
        throw createError({ statusCode: 400, statusMessage: 'SMTP config missing (SMTP_HOST, SMTP_USER, SMTP_PASS)' })
    }

    const transporter = nodemailer.createTransport({
        host,
        port,
        secure,
        auth: { user, pass },
    })

    const subject = body.subject || 'Коммерческое предложение'
    const templates = listTemplates()
    const attachments: { filename: string; path: string; contentType?: string }[] = []
    let html = ''

    if (body.templateId) {
        const tpl = templates.find(t => t.id === body.templateId)
        if (!tpl) throw createError({ statusCode: 404, statusMessage: 'template not found' })
        html = body.body ?? tpl.body ?? ''
        if (tpl.file) {
            const uploadsDir = join(process.cwd(), 'data', 'uploads')
            attachments.push({
                filename: tpl.file.originalName,
                path: join(uploadsDir, tpl.file.filename),
                contentType: tpl.file.mime,
            })
        }
    } else {
        html = body.body || ''
    }

    const info = await transporter.sendMail({
        from,
        to: body.emails.join(','),
        subject,
        html,
        attachments,
    })

    return { ok: true, messageId: info.messageId }
})


