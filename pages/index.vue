<template>
    <n-layout has-sider class="page-layout">
        <n-layout-sider class="sidebar" :native-scrollbar="false">
            <div class="sidebar-header">История запросов</div>
            <n-spin :show="historyLoading">
                <div class="history-wrapper">
                    <n-scrollbar class="history-scroll">
                        <template v-if="historyItems.length">
                            <div class="history-list">
                                <n-button v-for="item in historyItems" :key="item.id" quaternary block
                                    class="history-item"
                                    :class="{ 'history-item_active': item.id === historySelectedId }"
                                    @click="handleHistorySelect(item.id)">
                                    <div class="history-item__content">
                                        <div class="history-item__title">{{ item.query }}</div>
                                        <div class="history-item__date">{{ formatHistoryDate(item.createdAt) }}</div>
                                    </div>
                                </n-button>
                            </div>
                        </template>
                        <n-empty v-else description="История пуста" />
                    </n-scrollbar>
                </div>
            </n-spin>
        </n-layout-sider>
        <n-layout-content>
            <n-spin :show="loading || restoringHistory">
                <div class="content-wrapper">
                    <n-space vertical size="large">
                        <n-card title="Поиск и парсинг контактов">
                            <n-space vertical size="medium">
                                <n-grid :x-gap="12" :y-gap="12" :cols="24" responsive="screen">
                                    <n-grid-item :span="24" :span-md="14">
                                        <n-space vertical size="small">
                                            <n-text strong>Запрос</n-text>
                                            <n-input v-model:value="query" placeholder="Музыкальные студии Тюмень"
                                                clearable @keydown.enter="run" />
                                        </n-space>
                                    </n-grid-item>
                                    <n-grid-item :span="24" :span-md="6">
                                        <n-space vertical size="small">
                                            <n-text strong>Страниц поиска</n-text>
                                            <n-input-number v-model:value="pagesCount" :min="1" :max="10" :step="1"
                                                button-placement="both" />
                                        </n-space>
                                    </n-grid-item>
                                    <n-grid-item :span="24" :span-md="4" class="button-cell">
                                        <n-button type="primary" size="large" :loading="loading" block @click="run">
                                            {{ loading ? 'Идет поиск...' : 'Старт' }}
                                        </n-button>
                                    </n-grid-item>
                                </n-grid>
                            </n-space>
                        </n-card>

                        <n-alert v-if="error" type="error" :show-icon="true">
                            {{ error }}
                        </n-alert>

                        <n-card v-if="globalLogs.length" title="Логи процесса">
                            <n-scrollbar style="max-height: 260px;">
                                <pre class="log-pre">{{ globalLogs.join('\n') }}</pre>
                            </n-scrollbar>
                        </n-card>

                        <n-card v-if="results.length" :title="`Результаты (${results.length})`">
                            <n-space vertical size="large">
                                <n-card v-for="(r, idx) in results" :key="idx" bordered>
                                    <n-space vertical size="small">
                                        <n-text strong>{{ r.link.title }}</n-text>
                                        <n-a :href="r.page" target="_blank">{{ r.page }}</n-a>
                                        <n-text depth="3">{{ r.link.snippet }}</n-text>
                                    </n-space>

                                    <n-grid :x-gap="12" :y-gap="12" :cols="24" class="contacts-grid">
                                        <n-grid-item :span="24" :span-lg="8">
                                            <n-text strong class="section-label">Emails</n-text>
                                            <template v-if="r.contacts.emails.length">
                                                <n-space wrap>
                                                    <n-tag v-for="(email, eIdx) in r.contacts.emails"
                                                        :key="`email-${eIdx}`" type="success">
                                                        {{ email }}
                                                    </n-tag>
                                                </n-space>
                                            </template>
                                            <n-text v-else depth="3">нет</n-text>
                                        </n-grid-item>
                                        <n-grid-item :span="24" :span-lg="8">
                                            <n-text strong class="section-label">Телефоны</n-text>
                                            <template v-if="r.contacts.phones.length">
                                                <n-space wrap>
                                                    <n-tag v-for="(phone, pIdx) in r.contacts.phones"
                                                        :key="`phone-${pIdx}`">
                                                        {{ phone }}
                                                    </n-tag>
                                                </n-space>
                                            </template>
                                            <n-text v-else depth="3">нет</n-text>
                                        </n-grid-item>
                                        <n-grid-item :span="24" :span-lg="8">
                                            <n-text strong class="section-label">Соцсети</n-text>
                                            <template v-if="r.contacts.socials.length">
                                                <n-space wrap>
                                                    <n-a v-for="(social, sIdx) in r.contacts.socials"
                                                        :key="`social-${sIdx}`" :href="social.url" target="_blank">
                                                        {{ social.platform }}
                                                    </n-a>
                                                </n-space>
                                            </template>
                                            <n-text v-else depth="3">нет</n-text>
                                        </n-grid-item>
                                    </n-grid>

                                    <n-text v-if="r.hintsTried?.length" depth="3" class="hints-label">
                                        Навигация пробована: {{ r.hintsTried.join(' | ') }}
                                    </n-text>

                                    <n-collapse v-if="r.logs?.length" class="item-collapse">
                                        <n-collapse-item title="Логи по элементу">
                                            <n-scrollbar style="max-height: 200px;">
                                                <pre class="log-pre">{{ r.logs.join('\n') }}</pre>
                                            </n-scrollbar>
                                        </n-collapse-item>
                                    </n-collapse>
                                </n-card>
                            </n-space>
                        </n-card>
                    </n-space>
                </div>
            </n-spin>
        </n-layout-content>
    </n-layout>
</template>

<script setup lang="ts">
type SocialLink = {
    platform: string
    url: string
}

type Contact = {
    emails: string[]
    phones: string[]
    socials: SocialLink[]
}

type LinkSummary = {
    url: string
    title: string
    snippet: string
}

type SearchResultItem = {
    link: LinkSummary
    page: string
    contacts: Contact
    logs: string[]
    hintsTried?: string[]
}

type HistoryItem = {
    id: number
    query: string
    createdAt: string
}

const query = ref('Музыкальные студии Тюмень')
const loading = ref(false)
const error = ref('')
const results = ref<SearchResultItem[]>([])
const globalLogs = ref<string[]>([])
const pagesCount = ref(3)
const historyItems = ref<HistoryItem[]>([])
const historySelectedId = ref<number | null>(null)
const historyLoading = ref(false)
const restoringHistory = ref(false)

const dateFormatter = new Intl.DateTimeFormat('ru-RU', {
    dateStyle: 'short',
    timeStyle: 'short',
})

const formatHistoryDate = (value: string) => {
    try {
        return dateFormatter.format(new Date(value))
    } catch {
        return value
    }
}

const loadHistory = async () => {
    historyLoading.value = true

    try {
        const response = await $fetch('/api/history')

        const payload = response as { items?: HistoryItem[] }

        historyItems.value = payload.items ?? []
    } catch (err) {
        console.error('history load failed', err)
        historyItems.value = []
    }

    historyLoading.value = false
}

const handleHistorySelect = async (id: number) => {
    historySelectedId.value = id
    restoringHistory.value = true
    error.value = ''

    try {
        const response = await $fetch(`/api/history/${id}`)

        const payload = response as { results: SearchResultItem[]; logs: string[]; query: string }

        results.value = payload.results || []
        globalLogs.value = payload.logs || []
        query.value = payload.query
    } catch (err: any) {
        error.value = err?.statusMessage || err?.message || 'Не удалось открыть историю'
    }

    restoringHistory.value = false
}

const run = async () => {
    if (!query.value.trim()) {
        return
    }

    error.value = ''
    results.value = []
    globalLogs.value = []

    loading.value = true

    try {
        const response = await $fetch('/api/search', {
            method: 'POST',
            body: { query: query.value, top: 10, pages: pagesCount.value },
        })

        const payload = response as { results?: SearchResultItem[]; logs?: string[]; historyId?: number }

        if (payload.results) {
            results.value = payload.results
        }

        if (payload.logs) {
            globalLogs.value = payload.logs
        }

        await loadHistory()

        if (payload.historyId) {
            historySelectedId.value = payload.historyId
        }
    } catch (err: any) {
        error.value = err?.statusMessage || err?.message || 'Неизвестная ошибка'
    }

    loading.value = false
}

onMounted(async () => {
    await loadHistory()
})

</script>

<style scoped>
    .page-layout {
        min-height: 100vh;
    }

    .button-cell {
        display: flex;
        align-items: flex-end;
    }

    .log-pre {
        margin: 0;
        white-space: pre-wrap;
        font-size: 13px;
        font-family: 'SFMono-Regular', Consolas, Monaco, 'Courier New', monospace;
    }

    .contacts-grid {
        margin-top: 16px;
    }

    .item-collapse {
        margin-top: 12px;
    }

    .sidebar {
        padding: 24px 16px;
        border-right: 1px solid rgba(224, 224, 230, 0.6);
        background: #f7f8fa;
    }

    .sidebar-header {
        font-weight: 600;
        font-size: 16px;
        margin-bottom: 16px;
    }

    .history-wrapper {
        height: calc(100vh - 120px);
    }

    .history-scroll {
        height: 100%;
    }

    .history-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .history-item {
        justify-content: flex-start;
        text-align: left;
        white-space: normal;
    }

    .history-item_active {
        background-color: #e8f2ff;
    }

    .history-item__content {
        display: flex;
        flex-direction: column;
        gap: 4px;
        width: 100%;
    }

    .history-item__title {
        font-weight: 600;
        line-height: 1.3;
    }

    .history-item__date {
        font-size: 12px;
        color: #909399;
    }

    .content-wrapper {
        padding: 24px;
    }

    .section-label {
        display: block;
        margin-bottom: 4px;
    }

    .hints-label {
        display: block;
        margin-top: 8px;
    }
</style>
