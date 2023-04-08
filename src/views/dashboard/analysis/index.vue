<template>
  <div class="p-4">
    <SiteAnalysis class="!my-4 enter-y" :loading="loading" />
    <div class="md:flex enter-y">
      <VisitRadar class="w-full md:w-1/3" :loading="loading" />
      <VisitSource class="md:w-1/3 !md:mx-4 !md:my-0 !my-4 w-full" :loading="loading" />
      <SalesProductPie class="w-full md:w-1/3" :loading="loading" />
    </div>
  </div>
</template>
<script lang="ts" setup name="Analysis">
  import { ref } from 'vue'
  import SiteAnalysis from './components/SiteAnalysis.vue'
  import VisitSource from './components/VisitSource.vue'
  import VisitRadar from './components/VisitRadar.vue'
  import SalesProductPie from './components/SalesProductPie.vue'

  const loading = ref(true)

  setTimeout(() => {
    loading.value = false
  }, 1500)
</script>
