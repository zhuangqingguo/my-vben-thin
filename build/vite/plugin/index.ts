import { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import purgeIcons from 'vite-plugin-purge-icons'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import { configHtmlPlugin } from './html'
import { configMockPlugin } from './mock'
import { configThemePlugin } from './theme'
import { configCompressPlugin } from './compress'
import { configVisualizerConfig } from './visualizer'
import { configSvgIconsPlugin } from './svgSprite'

export async function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const { VITE_USE_MOCK, VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE } = viteEnv

  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // have to
    vue(),
    // have to
    vueJsx(),
  ]

  // vite-plugin-html
  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild))

  // vite-plugin-vue-setup-extend // setup模式下name问题
  vitePlugins.push(VueSetupExtend())

  // vite-plugin-svg-icons
  vitePlugins.push(configSvgIconsPlugin(isBuild))

  // vite-plugin-mock
  VITE_USE_MOCK && vitePlugins.push(configMockPlugin(isBuild))

  // vite-plugin-purge-icons
  vitePlugins.push(purgeIcons())

  // rollup-plugin-visualizer
  vitePlugins.push(configVisualizerConfig())

  // vite-plugin-theme
  vitePlugins.push(configThemePlugin(isBuild))

  // The following plugins only work in the production environment
  if (isBuild) {
    // rollup-plugin-gzip
    vitePlugins.push(
      configCompressPlugin(VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE),
    )
  }

  return vitePlugins
}
