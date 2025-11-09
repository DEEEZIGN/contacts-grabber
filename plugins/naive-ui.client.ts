import { create, NAlert, NButton, NCard, NCollapse, NCollapseItem, NConfigProvider, NEmpty, NGrid, NGridItem, NInput, NLayout, NLayoutContent, NLayoutSider, NA, NScrollbar, NSpace, NSpin, NTag, NText } from 'naive-ui'

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
        NButton,
        NAlert,
        NEmpty,
        NScrollbar,
        NSpin,
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



