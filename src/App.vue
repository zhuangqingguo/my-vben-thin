<template>
  <ConfigProvider :locale="zh_CN">
    <AppProvider>
      <RouterView />
    </AppProvider>
  </ConfigProvider>
</template>

<script lang="ts" setup>
  import { ConfigProvider } from 'ant-design-vue'
  import { AppProvider } from '/@/components/Application'
  import { useTitle } from '/@/hooks/web/useTitle'
  // import { useLocale } from '/@/locales/useLocale'
  import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN'

  import 'dayjs/locale/zh-cn'
  // support Multi-language
  // const { getAntdLocale } = useLocale()
  // console.log(111111, getAntdLocale)

  // Listening to page changes and dynamically changing site titles
  useTitle()
</script>
