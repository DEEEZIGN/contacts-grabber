import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

export type SmtpSettings = {
    host: string
    port: number
    secure: boolean
    user: string
    pass: string
    from: string
}

export type WhatsappSettings = {
    accessToken: string
    phoneNumberId: string
}

export type AppSettings = {
    smtp?: SmtpSettings
    whatsapp?: WhatsappSettings
}

const DATA_DIR = join(process.cwd(), 'data')
const SETTINGS_FILE = join(DATA_DIR, 'settings.json')

function ensureDataDir() {
    if (!existsSync(DATA_DIR)) {
        mkdirSync(DATA_DIR, { recursive: true })
    }
}

function readSettingsFile(): AppSettings {
    ensureDataDir()
    if (!existsSync(SETTINGS_FILE)) {
        return {}
    }
    try {
        const raw = readFileSync(SETTINGS_FILE, 'utf-8')
        const parsed = JSON.parse(raw)
        return parsed || {}
    } catch {
        return {}
    }
}

function writeSettingsFile(settings: AppSettings) {
    ensureDataDir()
    const payload = JSON.stringify(settings, null, 2)
    writeFileSync(SETTINGS_FILE, payload, 'utf-8')
}

export function getSettings(): AppSettings {
    return readSettingsFile()
}

export function saveSettings(update: AppSettings): AppSettings {
    const current = readSettingsFile()
    const merged: AppSettings = {
        ...current,
        ...update,
        smtp: update.smtp ? { ...current.smtp, ...update.smtp } : current.smtp,
        whatsapp: update.whatsapp ? { ...current.whatsapp, ...update.whatsapp } : current.whatsapp,
    }
    writeSettingsFile(merged)
    return merged
}


