import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

export type TextTemplate = {
    id: string
    name: string
    subject: string
    body: string
    updatedAt: string
}

export type FileTemplate = {
    id: string
    name: string
    filename: string
    originalName: string
    mime: string
    updatedAt: string
}

type Store = {
    textTemplates: TextTemplate[]
    fileTemplates: FileTemplate[]
}

const dataDir = join(process.cwd(), 'data')
const uploadsDir = join(dataDir, 'uploads')
const storePath = join(dataDir, 'templates.json')

function ensureStore(): Store {
    if (!existsSync(dataDir)) mkdirSync(dataDir, { recursive: true })
    if (!existsSync(uploadsDir)) mkdirSync(uploadsDir, { recursive: true })
    if (!existsSync(storePath)) {
        const initial: Store = { textTemplates: [], fileTemplates: [] }
        writeFileSync(storePath, JSON.stringify(initial, null, 2), 'utf-8')
        return initial
    }
    try {
        const raw = readFileSync(storePath, 'utf-8')
        const parsed = JSON.parse(raw) as Store
        if (!parsed.textTemplates || !parsed.fileTemplates) throw new Error('invalid')
        return parsed
    } catch {
        const reset: Store = { textTemplates: [], fileTemplates: [] }
        writeFileSync(storePath, JSON.stringify(reset, null, 2), 'utf-8')
        return reset
    }
}

function persist(store: Store) {
    writeFileSync(storePath, JSON.stringify(store, null, 2), 'utf-8')
}

export function listTemplates(): Store {
    return ensureStore()
}

export function upsertTextTemplate(input: Omit<TextTemplate, 'updatedAt'>): TextTemplate {
    const store = ensureStore()
    const now = new Date().toISOString()
    const existingIdx = store.textTemplates.findIndex((t) => t.id === input.id)
    const tpl: TextTemplate = { ...input, updatedAt: now }
    if (existingIdx >= 0) {
        store.textTemplates[existingIdx] = tpl
    } else {
        store.textTemplates.push(tpl)
    }
    persist(store)
    return tpl
}

export function saveFileTemplate(meta: Omit<FileTemplate, 'updatedAt'>): FileTemplate {
    const store = ensureStore()
    const now = new Date().toISOString()
    const existingIdx = store.fileTemplates.findIndex((t) => t.id === meta.id)
    const tpl: FileTemplate = { ...meta, updatedAt: now }
    if (existingIdx >= 0) {
        store.fileTemplates[existingIdx] = tpl
    } else {
        store.fileTemplates.push(tpl)
    }
    persist(store)
    return tpl
}

export function getUploadsDir(): string {
    ensureStore()
    return uploadsDir
}


