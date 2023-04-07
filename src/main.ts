import 'tailwindcss/base.css'
import 'tailwindcss/components.css'
import '/@/design/index.less'
import 'tailwindcss/utilities.css'

// Register icon sprite
import 'virtual:svg-icons-register'
import App from './App.vue'
import { createApp } from 'vue'
import { initAppConfigStore } from '/@/logics/initAppConfig'
import { router, setupRouter } from '/@/router'
import { setupRouterGuard } from '/@/router/guard'
import { setupStore } from '/@/store'
import { setupGlobDirectives } from '/@/directives'
import { registerGlobComp } from '/@/components/registerGlobComp'
import Antd from 'ant-design-vue'

import { isDevMode } from './utils/env'
if (isDevMode()) {
  // import('ant-design-vue/es/style')
  import('ant-design-vue/dist/antd.less')
}

async function bootstrap() {
  const app = createApp(App)

  // Configure store
  // 配置 store
  setupStore(app)

  // Initialize internal system configuration
  // 初始化内部系统配置
  initAppConfigStore()

  // Register global components
  // 注册全局组件
  registerGlobComp(app)

  // Configure routing
  // 配置路由
  setupRouter(app)

  // router-guard
  // 路由守卫
  setupRouterGuard(router)

  // Register global directive
  // 注册全局指令
  setupGlobDirectives(app)

  // Configure global error handling

  // https://next.router.vuejs.org/api/#isready
  // await router.isReady();

  app.use(Antd).mount('#app')
}

bootstrap()
