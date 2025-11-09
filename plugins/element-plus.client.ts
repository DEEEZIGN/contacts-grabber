import ElementPlus from 'element-plus'
import ru from 'element-plus/dist/locale/ru.mjs'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(ElementPlus, { locale: ru })
})




