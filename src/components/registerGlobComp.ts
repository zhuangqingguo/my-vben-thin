import type { App } from 'vue'
import { Button } from './Button'
import VXETable from 'vxe-table'

export { useTable } from './table'

export function registerGlobComp(app: App) {
  app.use(Button).use(VXETable)
}
