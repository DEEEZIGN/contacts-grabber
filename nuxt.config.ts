import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    devtools: { enabled: false },

    typescript: {
        strict: true,
        typeCheck: true,
    },

    css: ['@/assets/scss/main.scss'],

    runtimeConfig: {
        OPENAI_API_KEY: '',
        PROXYAPI_API_KEY: 'sk-hOLLCIr2HORpOqW1T8AUuNpsS5RBVFcZ',
        PROXYAPI_BASE_URL: 'https://api.proxyapi.ru/openai/v1',
        GOOGLE_SEARCH_UA: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
        PUPPETEER_HEADLESS: 'false',
        PUPPETEER_SLOWMO: '200',
        PUPPETEER_DEVTOOLS: 'true',
        public: {},
    },

    nitro: {
        preset: 'node-server',
    },

    vite: {
        define: {
            'process.env.PUPPETEER_PRODUCT': JSON.stringify('chrome'),
        },
        server: {
            watch: {
                usePolling: true,
            },
        },
    },

    compatibilityDate: '2025-11-05',
})