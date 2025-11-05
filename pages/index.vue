<template>
    <div class="container">
        <div class="card" style="margin-bottom: 16px;">
            <h2 style="margin: 0 0 12px 0;">Поиск и парсинг контактов</h2>
            <div class="row" style="align-items: flex-end;">
                <div class="grow">
                    <label style="display:block; margin-bottom:6px;">Запрос</label>
                    <input type="text" v-model="query" placeholder="Музыкальные студии Тюмень" />
                </div>
                <button class="btn" @click="run" :disabled="loading">{{ loading ? 'Идет поиск...' : 'Старт' }}</button>
            </div>
        </div>

        <div v-if="error" class="card" style="border-left: 4px solid #eb5757;">
            {{ error }}
        </div>

        <div v-if="globalLogs.length" class="card" style="margin-bottom: 16px;">
            <h3 style="margin-top: 0;">Логи процесса</h3>
            <pre
                style="white-space: pre-wrap; background:#f9fafb; padding:12px; border-radius:8px; max-height: 260px; overflow:auto;">{{ globalLogs.join('\n') }}</pre>
        </div>

        <div v-if="results.length" class="card">
            <h3 style="margin-top: 0;">Результаты ({{ results.length }})</h3>
            <div v-for="(r, idx) in results" :key="idx" style="padding: 12px 0; border-bottom: 1px solid #eee;">
                <div style="display:flex; justify-content:space-between; gap: 12px;">
                    <div>
                        <div><strong>{{ r.link.title }}</strong></div>
                        <a :href="r.page" target="_blank" rel="noopener">{{ r.page }}</a>
                        <div style="color: #6b7280;">{{ r.link.snippet }}</div>
                    </div>
                </div>
                <div style="margin-top: 8px; display:flex; gap: 24px; flex-wrap: wrap;">
                    <div>
                        <div><strong>Emails:</strong></div>
                        <div v-if="r.contacts.emails.length">{{ r.contacts.emails.join(', ') }}</div>
                        <div v-else style="color:#6b7280;">нет</div>
                    </div>
                    <div>
                        <div><strong>Телефоны:</strong></div>
                        <div v-if="r.contacts.phones.length">{{ r.contacts.phones.join(', ') }}</div>
                        <div v-else style="color:#6b7280;">нет</div>
                    </div>
                    <div>
                        <div><strong>Соцсети:</strong></div>
                        <div v-if="r.contacts.socials.length">
                            <span v-for="(s, i) in r.contacts.socials" :key="i" style="margin-right:8px;">
                                <a :href="s.url" target="_blank" rel="noopener">{{ s.platform }}</a>
                            </span>
                        </div>
                        <div v-else style="color:#6b7280;">нет</div>
                    </div>
                </div>
                <div v-if="r.hintsTried?.length" style="margin-top: 8px; color:#6b7280;">
                    <div><strong>Навигация пробована:</strong> {{ r.hintsTried.join(' | ') }}</div>
                </div>
                <div v-if="r.logs?.length" style="margin-top: 8px;">
                    <details>
                        <summary>Логи по элементу</summary>
                        <pre
                            style="white-space: pre-wrap; background:#f9fafb; padding:12px; border-radius:8px; max-height: 200px; overflow:auto;">{{ r.logs.join('\n') }}</pre>
                    </details>
                </div>
            </div>
        </div>
    </div>

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
