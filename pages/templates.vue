<template>
    <n-layout has-sider class="templates-layout">
        <n-layout-sider class="sidebar" :native-scrollbar="false">
            <div class="sidebar-header">Навигация</div>
            <div class="sidebar-actions">
                <n-menu :value="menuValue" :options="menuOptions" @update:value="onMenuSelect" />
            </div>
        </n-layout-sider>
        <n-layout-content>
            <div class="templates-page">
                <n-card title="Шаблоны КП">
                    <n-space justify="space-between" align="center" class="toolbar">
                        <n-space :size="8">
                            <n-button type="primary" @click="startCreate">Добавить шаблон</n-button>
                            <n-button @click="reload" :loading="loading">Обновить</n-button>
                        </n-space>
                    </n-space>

                    <n-space vertical :size="12" class="list">
                        <n-card v-for="tpl in templates" :key="tpl.id" class="tpl-card" size="small" :bordered="true">
                            <n-space justify="space-between" align="center">
                                <div class="tpl-main">
                                    <div class="tpl-name">{{ tpl.name }}</div>
                                    <div class="tpl-meta">
                                        <n-text depth="3">Тема:</n-text> {{ tpl.subject || '—' }}
                                    </div>
                                    <div class="tpl-meta">
                                        <n-text depth="3">Файл:</n-text> {{ tpl.file ? tpl.file.originalName : '—' }}
                                    </div>
                                </div>
                                <n-space :size="8">
                                    <n-button quaternary type="primary"
                                        @click="editTemplate(tpl)">Редактировать</n-button>
                                    <n-button quaternary type="warning" @click="openUpload(tpl)">Загрузить
                                        файл</n-button>
                                    <n-button quaternary type="error" @click="removeTemplate(tpl)">Удалить</n-button>
                                </n-space>
                            </n-space>
                        </n-card>
                    </n-space>
                </n-card>

                <n-modal v-model:show="editVisible" preset="card"
                    :title="editMode === 'create' ? 'Новый шаблон' : 'Редактирование шаблона'" class="modal-wide">
                    <n-form label-placement="top">
                        <n-form-item label="ID (уникальный)">
                            <n-input v-model:value="form.id" :disabled="editMode !== 'create'"
                                placeholder="general-offer" />
                        </n-form-item>
                        <n-form-item label="Название">
                            <n-input v-model:value="form.name" placeholder="Общий шаблон" />
                        </n-form-item>
                        <n-form-item label="Тема">
                            <n-input v-model:value="form.subject" placeholder="Коммерческое предложение" />
                        </n-form-item>
                        <n-form-item label="Текст">
                            <n-input v-model:value="form.body" type="textarea" :rows="10" placeholder="Текст письма" />
                        </n-form-item>
                    </n-form>
                    <template #footer>
                        <n-space justify="end">
                            <n-button quaternary @click="editVisible = false">Отмена</n-button>
                            <n-button type="primary" :loading="saving" @click="save">Сохранить</n-button>
                        </n-space>
                    </template>
                </n-modal>

                <n-modal v-model:show="uploadVisible" preset="card" title="Загрузка файла для шаблона"
                    class="modal-wide">
                    <n-space vertical :size="12">
                        <n-text>Шаблон: <strong>{{ currentTpl?.name }}</strong></n-text>
                        <n-upload :default-upload="false" @change="onPickFile">
                            <n-button>Выбрать файл</n-button>
                        </n-upload>
                    </n-space>
                    <template #footer>
                        <n-space justify="end">
                            <n-button quaternary @click="uploadVisible = false">Отмена</n-button>
                            <n-button type="primary" :loading="uploading" @click="upload">Загрузить</n-button>
                        </n-space>
                    </template>
                </n-modal>
            </div>
        </n-layout-content>
    </n-layout>
</template>

<script setup lang="ts">
const loading = ref(false)
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
type OfferTemplate = { id: string; name: string; subject: string; body: string; file?: { originalName: string } }
const templates = ref<OfferTemplate[]>([])

const editVisible = ref(false)
const uploadVisible = ref(false)
const saving = ref(false)
const uploading = ref(false)
const editMode = ref<'create' | 'edit'>('create')
const currentTpl = ref<OfferTemplate | null>(null)
const pickedFile = ref<File | null>(null)

const form = reactive({
    id: '',
    name: '',
    subject: '',
    body: '',
})

const reload = async () => {
    loading.value = true
    try {
        const data = await $fetch('/api/templates')
        templates.value = (data as any).templates || []
    } finally {
        loading.value = false
    }
}

const startCreate = () => {
    editMode.value = 'create'
    form.id = ''
    form.name = ''
    form.subject = ''
    form.body = ''
    editVisible.value = true
}

const editTemplate = (tpl: OfferTemplate) => {
    editMode.value = 'edit'
    form.id = tpl.id
    form.name = tpl.name
    form.subject = tpl.subject
    form.body = tpl.body
    editVisible.value = true
}

const save = async () => {
    if (!form.id || !form.name) return
    saving.value = true
    try {
        await $fetch('/api/templates', { method: 'POST', body: form })
        editVisible.value = false
        await reload()
    } finally {
        saving.value = false
    }
}

const openUpload = (tpl: OfferTemplate) => {
    currentTpl.value = tpl
    pickedFile.value = null
    uploadVisible.value = true
}

const onPickFile = (options: any) => {
    pickedFile.value = (options?.file?.file as File) || null
}

const upload = async () => {
    if (!currentTpl.value || !pickedFile.value) return
    uploading.value = true
    try {
        const fd = new FormData()
        fd.append('id', currentTpl.value.id)
        fd.append('name', currentTpl.value.name)
        fd.append('file', pickedFile.value)
        await $fetch('/api/templates/upload', { method: 'POST', body: fd })
        uploadVisible.value = false
        await reload()
    } finally {
        uploading.value = false
    }
}

const removeTemplate = async (tpl: OfferTemplate) => {
    await $fetch(`/api/templates/${tpl.id}`, { method: 'DELETE' })
    await reload()
}

onMounted(async () => {
    await reload()
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
