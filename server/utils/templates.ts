import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

export type OfferTemplate = {
    id: string
    name: string
    subject: string
    body: string
    file?: {
        filename: string
        originalName: string
        mime: string
    }
    updatedAt: string
}

type Store = {
    templates: OfferTemplate[]
}

const dataDir = join(process.cwd(), 'data')
const uploadsDir = join(dataDir, 'uploads')
const storePath = join(dataDir, 'templates.json')

function ensureStore(): Store {
    if (!existsSync(dataDir)) mkdirSync(dataDir, { recursive: true })
    if (!existsSync(uploadsDir)) mkdirSync(uploadsDir, { recursive: true })
    if (!existsSync(storePath)) {
        const initial: Store = { templates: [] }
        writeFileSync(storePath, JSON.stringify(initial, null, 2), 'utf-8')
        return initial
    }
    try {
        const raw = readFileSync(storePath, 'utf-8')
        const parsed = JSON.parse(raw) as Store
        if (!Array.isArray(parsed.templates)) throw new Error('invalid')
        return parsed
    } catch {
        const reset: Store = { templates: [] }
        writeFileSync(storePath, JSON.stringify(reset, null, 2), 'utf-8')
        return reset
    }
}

function persist(store: Store) {
    writeFileSync(storePath, JSON.stringify(store, null, 2), 'utf-8')
}

export function listTemplates(): OfferTemplate[] {
    return ensureStore().templates
}

export function upsertTemplate(input: Omit<OfferTemplate, 'updatedAt'>): OfferTemplate {
    const store = ensureStore()
    const now = new Date().toISOString()
    const idx = store.templates.findIndex(t => t.id === input.id)
    const tpl: OfferTemplate = { ...input, updatedAt: now }
    if (idx >= 0) {
        store.templates[idx] = tpl
    } else {
        store.templates.push(tpl)
    }
    persist(store)
    return tpl
}

export function deleteTemplate(id: string): boolean {
    const store = ensureStore()
    const lenBefore = store.templates.length
    store.templates = store.templates.filter(t => t.id !== id)
    persist(store)
    return store.templates.length < lenBefore
}

export function setTemplateFile(id: string, meta: { filename: string; originalName: string; mime: string }): OfferTemplate | null {
    const store = ensureStore()
    const idx = store.templates.findIndex(t => t.id === id)
    if (idx < 0) {
        return null
    }
    store.templates[idx] = {
        ...store.templates[idx],
        file: {
            filename: meta.filename,
            originalName: meta.originalName,
            mime: meta.mime,
        },
        updatedAt: new Date().toISOString(),
    }
    persist(store)
    return store.templates[idx]
}

export function getUploadsDir(): string {
    ensureStore()
    return uploadsDir
}


