<template>
    <n-layout has-sider class="settings-layout">
        <n-layout-sider class="sidebar" :native-scrollbar="false">
            <div class="sidebar-header">Навигация</div>
            <div class="sidebar-actions">
                <n-space vertical :size="8">
                    <n-button size="small" tertiary @click="navigateTo('/')">Поиск</n-button>
                    <n-button size="small" tertiary @click="navigateTo('/templates')">Шаблоны КП</n-button>
                    <n-button size="small" type="primary" quaternary disabled>Настройки</n-button>
                </n-space>
            </div>
        </n-layout-sider>
        <n-layout-content>
            <div class="settings-page">
                <n-space vertical :size="16">
                    <n-card title="SMTP">
                        <n-form label-placement="top">
                            <n-grid :cols="24" :x-gap="16" :y-gap="12">
                                <n-grid-item :span="24" :span-lg="12">
                                    <n-form-item label="Host">
                                        <n-input v-model:value="smtp.host" placeholder="smtp.example.com" />
                                    </n-form-item>
                                </n-grid-item>
                                <n-grid-item :span="12" :span-lg="4">
                                    <n-form-item label="Port">
                                        <n-input-number v-model:value="smtp.port" :min="1" :max="65535" />
                                    </n-form-item>
                                </n-grid-item>
                                <n-grid-item :span="12" :span-lg="4">
                                    <n-form-item label="Secure (SSL)">
                                        <n-switch v-model:value="smtp.secure" size="large">
                                            <template #checked>SSL</template>
                                            <template #unchecked>Нет</template>
                                        </n-switch>
                                    </n-form-item>
                                </n-grid-item>
                                <n-grid-item :span="24" :span-lg="12">
                                    <n-form-item label="User">
                                        <n-input v-model:value="smtp.user" placeholder="you@example.com" />
                                    </n-form-item>
                                </n-grid-item>
                                <n-grid-item :span="24" :span-lg="12">
                                    <n-form-item label="Password">
                                        <n-input v-model:value="smtp.pass" type="password"
                                            placeholder="пароль или пароль приложения" />
                                    </n-form-item>
                                </n-grid-item>
                                <n-grid-item :span="24" :span-lg="12">
                                    <n-form-item label="From">
                                        <n-input v-model:value="smtp.from" placeholder="Имя <you@example.com>" />
                                    </n-form-item>
                                </n-grid-item>
                            </n-grid>
                        </n-form>
                    </n-card>



                    <n-card title="WhatsApp (Cloud API)">
                        <n-form label-placement="top">
                            <n-grid :cols="24" :x-gap="16" :y-gap="12">
                                <n-grid-item :span="24" :span-lg="12">
                                    <n-form-item label="Access Token">
                                        <n-input v-model:value="whatsapp.accessToken" placeholder="EAAG..."
                                            type="password" />
                                    </n-form-item>
                                </n-grid-item>
                                <n-grid-item :span="24" :span-lg="12">
                                    <n-form-item label="Phone Number ID">
                                        <n-input v-model:value="whatsapp.phoneNumberId" placeholder="123456789012345" />
                                    </n-form-item>
                                </n-grid-item>
                            </n-grid>
                        </n-form>
                    </n-card>

                    <n-space justify="end">
                        <n-button type="primary" :loading="saving" @click="save">Сохранить</n-button>
                    </n-space>
                </n-space>
            </div>
        </n-layout-content>
    </n-layout>
</template>

<script setup lang="ts">
type SettingsResponse = {
    settings?: {
        smtp?: { host: string; port: number; secure: boolean; user: string; pass: string; from: string }
        whatsapp?: { accessToken: string; phoneNumberId: string }
    }
}

const saving = ref(false)

const smtp = reactive({
    host: '',
    port: 587,
    secure: false,
    user: '',
    pass: '',
    from: '',
})

const whatsapp = reactive({
    accessToken: '',
    phoneNumberId: '',
})

const load = async () => {
    const data = await $fetch('/api/settings') as SettingsResponse
    const s = data?.settings || {}

    if (s.smtp) {
        smtp.host = s.smtp.host || ''
        smtp.port = s.smtp.port || 587
        smtp.secure = Boolean(s.smtp.secure)
        smtp.user = s.smtp.user || ''
        smtp.pass = s.smtp.pass || ''
        smtp.from = s.smtp.from || ''
    }

    if (s.whatsapp) {
        whatsapp.accessToken = s.whatsapp.accessToken || ''
        whatsapp.phoneNumberId = s.whatsapp.phoneNumberId || ''
    }
}

const save = async () => {
    saving.value = true
    try {
        await $fetch('/api/settings', {
            method: 'POST',
            body: {
                smtp: { ...smtp },
                whatsapp: { ...whatsapp },
            },
        })
    } finally {
        saving.value = false
    }
}

onMounted(async () => {
    await load()
})
</script>

<style scoped>
    .settings-layout {
        min-height: 100vh;
        height: 100vh;
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

    .sidebar-actions {
        padding: 0 16px 12px 16px;
    }

    .settings-page {
        padding: 24px;
    }
</style>
