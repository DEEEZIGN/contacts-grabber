<template>
    <el-container style="min-height: 100vh;">
        <el-main>
            <el-card shadow="hover" style="margin-bottom: 16px;">
                <template #header>
                    <div class="card-header">Поиск и парсинг контактов</div>
                </template>
                <el-form label-position="top">
                    <el-row :gutter="12" align="middle">
                        <el-col :span="20">
                            <el-form-item label="Запрос">
                                <el-input v-model="query" placeholder="Музыкальные студии Тюмень" clearable />
                            </el-form-item>
                        </el-col>
                        <el-col :span="4" style="display:flex; align-items:flex-end;">
                            <el-button type="primary" @click="run" :loading="loading"
                                style="width:100%">Старт</el-button>
                        </el-col>
                    </el-row>
                </el-form>
            </el-card>

            <el-alert v-if="error" type="error" :closable="false" show-icon style="margin-bottom: 16px;"
                :title="error" />

            <el-card v-if="globalLogs.length" shadow="never" style="margin-bottom:16px;">
                <template #header>
                    <div class="card-header">Логи процесса</div>
                </template>
                <el-scrollbar height="260px">
                    <pre style="white-space: pre-wrap; margin:0;">{{ globalLogs.join('\n') }}</pre>
                </el-scrollbar>
            </el-card>

            <el-card v-if="results.length" shadow="never">
                <template #header>
                    <div class="card-header">Результаты ({{ results.length }})</div>
                </template>

                <el-space direction="vertical" alignment="stretch" :size="16" style="width:100%">
                    <el-card v-for="(r, idx) in results" :key="idx" shadow="hover">
                        <el-row :gutter="12">
                            <el-col :span="24">
                                <div style="display:flex; flex-direction:column; gap:4px;">
                                    <strong>{{ r.link.title }}</strong>
                                    <el-link :href="r.page" target="_blank" type="primary">{{ r.page }}</el-link>
                                    <span style="color:#6b7280;">{{ r.link.snippet }}</span>
                                </div>
                            </el-col>
                        </el-row>

                        <el-row :gutter="12" style="margin-top:8px;">
                            <el-col :span="8">
                                <div style="margin-bottom:6px; font-weight:600;">Emails</div>
                                <div v-if="r.contacts.emails.length">
                                    <el-space wrap>
                                        <el-tag v-for="(e, i) in r.contacts.emails" :key="i" type="success"
                                            effect="light">{{ e
                                            }}</el-tag>
                                    </el-space>
                                </div>
                                <el-text v-else type="info">нет</el-text>
                            </el-col>
                            <el-col :span="8">
                                <div style="margin-bottom:6px; font-weight:600;">Телефоны</div>
                                <div v-if="r.contacts.phones.length">
                                    <el-space wrap>
                                        <el-tag v-for="(p, i) in r.contacts.phones" :key="i" effect="light">{{ p
                                            }}</el-tag>
                                    </el-space>
                                </div>
                                <el-text v-else type="info">нет</el-text>
                            </el-col>
                            <el-col :span="8">
                                <div style="margin-bottom:6px; font-weight:600;">Соцсети</div>
                                <div v-if="r.contacts.socials.length">
                                    <el-space wrap>
                                        <el-link v-for="(s, i) in r.contacts.socials" :key="i" :href="s.url"
                                            target="_blank">{{
                                                s.platform }}</el-link>
                                    </el-space>
                                </div>
                                <el-text v-else type="info">нет</el-text>
                            </el-col>
                        </el-row>

                        <el-row v-if="r.hintsTried?.length" :gutter="12" style="margin-top:8px;">
                            <el-col :span="24">
                                <el-text type="info">Навигация пробована: {{ r.hintsTried.join(' | ') }}</el-text>
                            </el-col>
                        </el-row>

                        <el-collapse v-if="r.logs?.length" style="margin-top:8px;">
                            <el-collapse-item title="Логи по элементу">
                                <el-scrollbar height="200px">
                                    <pre style="white-space: pre-wrap; margin:0;">{{ r.logs.join('\n') }}</pre>
                                </el-scrollbar>
                            </el-collapse-item>
                        </el-collapse>
                    </el-card>
                </el-space>
            </el-card>
        </el-main>
    </el-container>

</template>

<script setup lang="ts">
const query = ref('Музыкальные студии Тюмень')
const loading = ref(false)
const error = ref('')
const results = ref<any[]>([])
const globalLogs = ref<string[]>([])

const run = async () => {
    error.value = ''
    results.value = []
    loading.value = true

    try {
        const { data, error: err } = await useFetch('/api/search', {
            method: 'POST',
            body: { query: query.value, top: 10 },
        })

        if (err.value) {
            error.value = err.value?.statusMessage || 'Ошибка запроса'
        }

        if (data.value) {
            const payload = data.value as any
            results.value = payload.results || []
            globalLogs.value = payload.logs || []
        }
    } catch (e: any) {
        error.value = e?.message || 'Неизвестная ошибка'
    }

    loading.value = false
}

</script>

<style scoped></style>
