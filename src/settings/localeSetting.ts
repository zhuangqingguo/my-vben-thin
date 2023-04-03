import type { DropMenu } from '../components/Dropdown'
import type { LocaleSetting, LocaleType } from '/#/config'

export const LOCALE: { [key: string]: LocaleType } = {
  ZH_CN: 'zh_CN',
}

export const localeSetting: LocaleSetting = {
  // Locale
  locale: LOCALE.ZH_CN,
  // Default locale
  fallback: LOCALE.ZH_CN,
  // available Locales
  availableLocales: [LOCALE.ZH_CN],
}

// locale list
export const localeList: DropMenu[] = [
  {
    text: '简体中文',
    event: LOCALE.ZH_CN,
  },
]
