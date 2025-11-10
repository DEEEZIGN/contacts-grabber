import { create, NAlert, NButton, NCard, NCollapse, NCollapseItem, NConfigProvider, NDivider, NEmpty, NForm, NFormItem, NGrid, NGridItem, NInput, NInputNumber, NLayout, NLayoutContent, NLayoutSider, NModal, NA, NProgress, NScrollbar, NSelect, NSpace, NSpin, NTabPane, NTabs, NTag, NText, NUpload, NSwitch } from 'naive-ui'

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
        NForm,
        NFormItem,
        NScrollbar,
        NSpin,
        NProgress,
        NModal,
        NSelect,
        NUpload,
        NTabs,
        NTabPane,
        NDivider,
        NTag,
        NCollapse,
        NCollapseItem,
        NText,
        NA,
        NSwitch,
    ],
})

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(naive)
})



