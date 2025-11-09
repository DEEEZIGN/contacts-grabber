import { create, NAlert, NButton, NCard, NCollapse, NCollapseItem, NConfigProvider, NEmpty, NGrid, NGridItem, NInput, NInputNumber, NLayout, NLayoutContent, NLayoutSider, NA, NScrollbar, NSpace, NSpin, NTag, NText, NProgress, NModal } from 'naive-ui'

const naive = create({
    components: [
        NConfigProvider,
        NLayout,
        NLayoutSider,
        NLayoutContent,
        NCard,
        NSpace,
        NGrid,
        NGridItem,
        NInput,
        NInputNumber,
        NButton,
        NAlert,
        NEmpty,
        NScrollbar,
        NSpin,
        NProgress,
        NModal,
        NTag,
        NCollapse,
        NCollapseItem,
        NText,
        NA,
    ],
})

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(naive)
})



