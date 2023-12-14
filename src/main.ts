import '@/utils/baidu'

import '@/utils/system.copyright'

import IduxCdk from '@idux/cdk'
import IduxComponents from '@idux/components'
import { IDUX_ICON_DEPENDENCIES, addIconDefinitions } from '@idux/components/icon'
import { createGlobalConfig } from '@idux/components/config'
import { zhCN } from '@idux/components/locales'
import '@idux/components/index.full.css'

import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'

import Message from 'vue-m-message'
import 'vue-m-message/dist/style.css'

import 'overlayscrollbars/overlayscrollbars.css'

import App from './App.vue'
import pinia from './store'
import router from './router'

// 自定义指令
import directive from '@/utils/directive'

// 加载 svg 图标
import 'virtual:svg-icons-register'

// 加载 iconify 图标
import { downloadAndInstall } from '@/iconify'
import icons from '@/iconify/index.json'

import 'virtual:uno.css'

// 全局样式
import '@/assets/styles/globals.scss'

const app = createApp(App)
addIconDefinitions(IDUX_ICON_DEPENDENCIES)
app.use(IduxCdk).use(IduxComponents).use(createGlobalConfig({ locale: zhCN }))
app.use(FloatingVue, {
  distance: 12,
})
app.use(Message)
app.use(pinia)
app.use(router)
directive(app)
if (icons.isOfflineUse) {
  for (const info of icons.collections) {
    downloadAndInstall(info)
  }
}

app.mount('#app')
