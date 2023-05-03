export * from './src/type'

export { useTable } from './src/hooks'

import { withInstall } from '/@/utils'
import VTable from './src/Table.vue'
// import { VXETable } from 'vxe-table'
// import VXETablePluginAntd from './src/components'
// import VXETablePluginExportXLSX from 'vxe-table-plugin-export-xlsx'
// import './src/setting'

export const VbenTable = withInstall(VTable)
export * from 'vxe-table'
// export * from './src/types'

// VXETable.use(VXETablePluginAntd).use(VXETablePluginExportXLSX)
