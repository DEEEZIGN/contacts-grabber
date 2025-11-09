import nodemailer from 'nodemailer'
import { listTemplates } from '@/server/utils/templates'
import { join } from 'node:path'

type Body = {
    emails: string[]
    subject?: string
    mode: 'text' | 'file'
    textTemplateId?: string
    body?: string
    fileTemplateId?: string
}

export default defineEventHandler(async (event) => {
    const body = await readBody<Body>(event)
    if (!body?.emails?.length) {
        throw createError({ statusCode: 400, statusMessage: 'emails required' })
    }
    if (body.mode !== 'text' && body.mode !== 'file') {
        throw createError({ statusCode: 400, statusMessage: 'invalid mode' })
    }

    const cfg = useRuntimeConfig()
    const host = cfg.SMTP_HOST as string
    const port = Number(cfg.SMTP_PORT || 587)
    const user = cfg.SMTP_USER as string
    const pass = cfg.SMTP_PASS as string
    const secure = String(cfg.SMTP_SECURE || 'false').toLowerCase() === 'true'
    const from = (cfg.SMTP_FROM as string) || user

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
    const { textTemplates, fileTemplates } = listTemplates()
    const attachments: { filename: string; path: string; contentType?: string }[] = []
    let html = ''

    if (body.mode === 'text') {
        const tpl = textTemplates.find((t) => t.id === body.textTemplateId)
        html = body.body || tpl?.body || ''
    } else {
        const tpl = fileTemplates.find((t) => t.id === body.fileTemplateId)
        if (!tpl) {
            throw createError({ statusCode: 400, statusMessage: 'fileTemplateId not found' })
        }
        const uploadsDir = join(process.cwd(), 'data', 'uploads')
        attachments.push({
            filename: tpl.originalName,
            path: join(uploadsDir, tpl.filename),
            contentType: tpl.mime,
        })
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


