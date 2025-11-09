import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

type StoredPayload = {
    results: unknown[]
    logs: string[]
}

export type HistoryListItem = {
    id: number
    query: string
    createdAt: string
}

export type HistoryEntry = HistoryListItem & StoredPayload

type HistoryStore = {
    lastId: number
    items: HistoryEntry[]
}

const dataDir = join(process.cwd(), 'data')
const historyPath = join(dataDir, 'history.json')

function ensureStore(): HistoryStore {
    if (!existsSync(dataDir)) {
        mkdirSync(dataDir, { recursive: true })
    }

    if (!existsSync(historyPath)) {
        const initial: HistoryStore = { lastId: 0, items: [] }
        writeFileSync(historyPath, JSON.stringify(initial, null, 2), 'utf-8')
        return initial
    }

    try {
        const raw = readFileSync(historyPath, 'utf-8')
        const parsed = JSON.parse(raw) as HistoryStore
        if (!parsed.items || typeof parsed.lastId !== 'number') {
            throw new Error('invalid store structure')
        }
        return parsed
    } catch (err) {
        console.error('Failed to read history store, resetting...', err)
        const reset: HistoryStore = { lastId: 0, items: [] }
        writeFileSync(historyPath, JSON.stringify(reset, null, 2), 'utf-8')
        return reset
    }
}

function persistStore(store: HistoryStore) {
    writeFileSync(historyPath, JSON.stringify(store, null, 2), 'utf-8')
}

export function saveSearchResult(query: string, payload: StoredPayload): number {
    const store = ensureStore()
    const id = store.lastId + 1
    const createdAt = new Date().toISOString()

    const entry: HistoryEntry = {
        id,
        query,
        createdAt,
        results: payload.results,
        logs: payload.logs,
    }

    store.items.unshift(entry)
    store.lastId = id

    // keep reasonable amount entries e.g. 200
    if (store.items.length > 200) {
        store.items = store.items.slice(0, 200)
    }

    persistStore(store)
    return id
}

export function fetchHistory(limit = 30): HistoryListItem[] {
    const store = ensureStore()
    return store.items.slice(0, limit).map((entry) => ({
        id: entry.id,
        query: entry.query,
        createdAt: entry.createdAt,
    }))
}

export function fetchHistoryEntry(id: number): HistoryEntry | null {
    const store = ensureStore()
    return store.items.find((entry) => entry.id === id) ?? null
}


