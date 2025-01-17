import type { App } from 'vue'
import IduxCdk from '@idux/cdk'
import IduxComponents from '@idux/components'
import { createGlobalConfig } from '@idux/components/config'
import { addIconDefinitions, IDUX_ICON_DEPENDENCIES } from '@idux/components/icon'
import { zhCN } from '@idux/components/locales'
import '@idux/components/index.full.css'

function install(app: App) {
  addIconDefinitions(IDUX_ICON_DEPENDENCIES)
  app.use(IduxCdk).use(IduxComponents).use(createGlobalConfig({ locale: zhCN }))
}

export default { install }
