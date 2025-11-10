<template>
    <n-layout has-sider class="page-layout">
        <n-layout-sider class="sidebar" :native-scrollbar="false">
            <div class="sidebar-header">Меню</div>
            <div class="sidebar-actions">
                <n-menu :value="menuValue" :options="menuOptions" @update:value="onMenuSelect" />
                <div style="padding: 8px 12px;">
                    <n-button size="small" tertiary @click="seedHistory" block>Загрузить тестовые данные</n-button>
                </div>
            </div>
        </n-layout-sider>
        <n-layout has-sider class="content-with-history">
            <n-layout-content>
                <n-spin :show="loading || restoringHistory">
                    <div class="content-wrapper">
                        <n-space vertical size="large">
                            <n-card title="Поиск и парсинг контактов">
                                <n-space class="search-row" align="center" size="small">
                                    <n-input class="query-input" v-model:value="query"
                                        placeholder="Музыкальные студии Тюмень" clearable @keydown.enter="run" />
                                    <n-input-number class="pages-input" v-model:value="pagesCount" :min="1" :max="10"
                                        :step="1" button-placement="both" />
                                    <n-button class="search-button" type="primary" size="medium" :loading="loading"
                                        @click="run">
                                        {{ loading ? 'Идет поиск...' : 'Старт' }}
                                    </n-button>
                                </n-space>
                            </n-card>

                            <n-alert v-if="error" type="error" :show-icon="true">
                                {{ error }}
                            </n-alert>

                            <div class="progress-row">
                                <n-progress v-if="loading" type="line" :percentage="100" processing indeterminate />
                                <n-progress v-else-if="results.length" type="line" :percentage="100" />
                                <n-button size="small" tertiary :disabled="!globalLogs.length" @click="showLogs = true">
                                    Открыть логи
                                </n-button>
                            </div>



                            <n-card v-if="results.length" :title="`Результаты (${results.length})`">
                                <n-space vertical size="large">
                                    <n-card v-for="(r, idx) in results" :key="idx" bordered class="result-card">
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

                                        <n-divider />
                                        <div class="card-actions">
                                            <n-space :size="8" wrap>
                                                <n-button tertiary type="primary" @click="openSendOffer(r)">Отправить КП</n-button>
                                                <n-button tertiary @click="openWhatsAppSend(r)">WhatsApp</n-button>
                                            </n-space>
                                        </div>

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
            <n-layout-sider width="300" class="history-sider" :native-scrollbar="false">
                <div class="sidebar-header">История</div>
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
                                            <div class="history-item__date">{{ formatHistoryDate(item.createdAt) }}
                                            </div>
                                        </div>
                                    </n-button>
                                </div>
                            </template>
                            <n-empty v-else description="История пуста" />
                        </n-scrollbar>
                    </div>
                </n-spin>
            </n-layout-sider>
        </n-layout>
    </n-layout>

    <n-modal v-model:show="sendOfferVisible" preset="card" title="Отправка КП" class="modal-wide">
        <n-form label-placement="top">
            <n-form-item label="Шаблон">
                <n-select v-model:value="sendForm.templateId" :options="templateSelectOptions"
                    placeholder="Выберите шаблон" @update:value="onTemplatePicked" />
            </n-form-item>
            <n-form-item label="Получатели (email)">
                <n-select v-model:value="sendForm.emails" multiple :options="recipientOptions" filterable
                    placeholder="email@domain.ru" />
            </n-form-item>
            <n-form-item label="Тема">
                <n-input v-model:value="sendForm.subject" placeholder="Коммерческое предложение" />
            </n-form-item>
            <n-form-item label="Текст письма">
                <n-input v-model:value="sendForm.body" type="textarea" :rows="8" placeholder="Текст КП" />
            </n-form-item>
            <n-text depth="3" v-if="pickedTemplateFileName">Файл из шаблона: {{ pickedTemplateFileName }}</n-text>
        </n-form>
        <template #footer>
            <n-space justify="end">
                <n-button quaternary @click="sendOfferVisible = false">Отмена</n-button>
                <n-button type="primary" :loading="sending" @click="sendOffer">Отправить</n-button>
            </n-space>
        </template>
    </n-modal>

    <n-modal v-model:show="socialSendVisible" preset="card" title="Отправка в WhatsApp" class="modal-wide">
        <n-form label-placement="top">
            <n-form-item label="Кому">
                <n-input v-model:value="socialForm.to" placeholder="@username / vk.com/name / +79991234567" />
            </n-form-item>
            <n-form-item label="Текст сообщения">
                <n-input v-model:value="socialForm.text" type="textarea" :rows="6" placeholder="Текст сообщения" />
            </n-form-item>
        </n-form>
        <template #footer>
            <n-space justify="end">
                <n-button quaternary @click="socialSendVisible = false">Отмена</n-button>
                <n-button type="primary" :loading="sendingSocial" @click="sendSocial">Отправить</n-button>
            </n-space>
        </template>
    </n-modal>
    <n-modal v-model:show="templatesVisible" preset="card" title="Шаблоны КП" class="modal-wide">
        <n-space vertical :size="16">
            <n-tabs type="line" animated>
                <n-tab-pane name="text" tab="Текстовые шаблоны">
                    <n-form label-placement="top">
                        <n-form-item label="Название">
                            <n-input v-model:value="editTextTpl.name" placeholder="Общий шаблон" />
                        </n-form-item>
                        <n-form-item label="Тема">
                            <n-input v-model:value="editTextTpl.subject" placeholder="Коммерческое предложение" />
                        </n-form-item>
                        <n-form-item label="Текст письма">
                            <n-input v-model:value="editTextTpl.body" type="textarea" :rows="10"
                                placeholder="Текст письма" />
                        </n-form-item>
                        <n-space justify="end">
                            <n-button type="primary" :loading="savingTemplates"
                                @click="saveTextTemplate">Сохранить</n-button>
                        </n-space>
                    </n-form>
                </n-tab-pane>
                <n-tab-pane name="file" tab="Файл-шаблон (приложение)">
                    <n-form label-placement="top">
                        <n-form-item label="Название">
                            <n-input v-model:value="editFileTpl.name" placeholder="Общий файл КП" />
                        </n-form-item>
                        <n-form-item label="Загрузка файла">
                            <n-upload :default-upload="false" @change="onFilePicked">
                                <n-button>Выбрать файл</n-button>
                            </n-upload>
                        </n-form-item>
                        <n-space justify="end">
                            <n-button type="primary" :loading="uploading"
                                @click="uploadFileTemplate">Загрузить</n-button>
                        </n-space>
                        <n-divider />
                        <n-text depth="3">Доступные файлы:</n-text>
                        <n-space vertical size="small">
                            <n-tag v-for="f in templates.fileTemplates" :key="f.id" type="info">{{ f.name }} ({{
                                f.originalName }})</n-tag>
                        </n-space>
                    </n-form>
                </n-tab-pane>
            </n-tabs>
        </n-space>
        <template #footer>
            <n-space justify="end">
                <n-button type="primary" @click="templatesVisible = false">Готово</n-button>
            </n-space>
        </template>
    </n-modal>
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

type TemplatesStore = {
    textTemplates: { id: string; name: string; subject: string; body: string }[]
    fileTemplates: { id: string; name: string; filename: string; originalName: string; mime: string }[]
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
const showLogs = ref(false)

const sendOfferVisible = ref(false)
const sending = ref(false)
const templateList = ref<{ id: string; name: string; subject: string; body: string; file?: { originalName: string } }[]>([])
const recipientOptions = ref<{ label: string; value: string }[]>([])
const templateSelectOptions = computed(() => templateList.value.map(t => ({ label: t.name, value: t.id })))
const pickedTemplateFileName = ref('')

const sendForm = reactive({
    emails: [] as string[],
    subject: 'Коммерческое предложение',
    templateId: '',
    body: '',
})

const route = useRoute()
const menuOptions = [
    { label: 'Поиск', key: '/' },
    { label: 'Шаблоны КП', key: '/templates' },
    { label: 'Настройки', key: '/settings' },
]
const menuValue = computed(() => {
    if (route.path.startsWith('/templates')) return '/templates'
    if (route.path.startsWith('/settings')) return '/settings'
    return '/'
})
const onMenuSelect = (key: string) => {
    navigateTo(key)
}

const socialSendVisible = ref(false)
const sendingSocial = ref(false)
const socialForm = reactive({
    to: '',
    text: '',
})

const loadAllTemplates = async () => {
    const data = await $fetch('/api/templates')
    templateList.value = (data as any).templates || []
}

const openSendOffer = async (item: SearchResultItem) => {
    await loadAllTemplates()
    const emails = (item.contacts.emails || []).filter(Boolean)
    recipientOptions.value = emails.map(e => ({ label: e, value: e }))
    sendForm.emails = emails.slice(0, 3)
    const first = templateList.value[0]
    sendForm.templateId = first?.id || ''
    sendForm.subject = first?.subject || 'Коммерческое предложение'
    sendForm.body = first?.body || ''
    pickedTemplateFileName.value = first?.file?.originalName || ''
    sendOfferVisible.value = true
}

const onTemplatePicked = (id: string) => {
    const tpl = templateList.value.find(t => t.id === id)
    if (!tpl) return
    sendForm.subject = tpl.subject || 'Коммерческое предложение'
    sendForm.body = tpl.body || ''
    pickedTemplateFileName.value = tpl.file?.originalName || ''
}

const sendOffer = async () => {
    if (!sendForm.emails.length) {
        return
    }
    sending.value = true
    try {
        await $fetch('/api/send-offer', {
            method: 'POST',
            body: {
                emails: sendForm.emails,
                subject: sendForm.subject,
                templateId: sendForm.templateId,
                body: sendForm.body,
            },
        })
        sendOfferVisible.value = false
    } finally {
        sending.value = false
    }
}

const guessWhatsappTo = (item: SearchResultItem): string => {
    const wa = (item.contacts.socials || []).find(s => (s.platform || '').toLowerCase() === 'whatsapp')
    if (wa?.url) return wa.url
    const firstPhone = (item.contacts.phones || [])[0]
    if (firstPhone) return firstPhone
    return ''
}

const openWhatsAppSend = (item: SearchResultItem) => {
    socialForm.text = `Здравствуйте! Пишу по поводу сотрудничества. Сайт: ${item.page}`
    socialForm.to = guessWhatsappTo(item)
    socialSendVisible.value = true
}

const sendSocial = async () => {
    if (!socialForm.to || !socialForm.text) {
        return
    }
    sendingSocial.value = true
    try {
        await $fetch('/api/send-whatsapp', { method: 'POST', body: { to: socialForm.to, text: socialForm.text } })
        socialSendVisible.value = false
    } finally {
        sendingSocial.value = false
    }
}
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

const seedHistory = async () => {
    try {
        const res = await $fetch('/api/history/seed', { method: 'POST' }) as { id?: number }
        await loadHistory()
        if (res?.id) {
            await handleHistorySelect(res.id)
        }
    } catch (err) {
        console.error('seed failed', err)
    }
}

onMounted(async () => {
    await loadHistory()
})

</script>
<style scoped>
    .page-layout {
        min-height: 100vh;
        height: 100vh;
    }

    .search-row {
        display: flex !important;
        flex-wrap: nowrap !important;
        width: 100%;
        gap: 12px;
        align-items: center;
        justify-content: center;

        &>div:first-child {
            flex-grow: 1 !important;
        }

        &>div:last-child {
            flex-grow: 0 !important;
        }
    }

    .query-input {
        min-width: 400px;
        width: 100%;
        display: flex;
        flex-grow: 1;
    }

    .pages-input {
        width: 160px;
    }

    .search-button {
        width: 200px;
        flex: 0 0 200px;
    }

    .progress-row {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 0 24px;
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

    .result-card :deep(.n-card__content) {
        padding-bottom: 8px;
    }

    .card-actions {
        display: flex;
        justify-content: flex-end;
    }

    .sidebar {
        border-right: 1px solid rgba(224, 224, 230, 0.6);
        background: #f7f8fa;
    }

    .sidebar-header {
        font-weight: 600;
        font-size: 16px;
        padding: 16px;
    }

    .history-wrapper {
        height: calc(100vh - 90px);
    }

    .sidebar-actions {
        padding: 0 16px 12px 16px;
    }

    .history-sider {
        border-left: 1px solid rgba(224, 224, 230, 0.6);
        background: #f7f8fa;
        padding: 16px 0;
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
        padding: 8px 16px;
        height: 64px;
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

    .modal-wide {
        width: 720px;
        max-width: 95vw;
    }
</style>
