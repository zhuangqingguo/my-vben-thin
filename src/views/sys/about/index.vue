<template>
  <PageWrapper title="关于">
    <template #headerContent>
      <div class="flex items-center justify-between">
        <span class="flex-1">
          是一个基于Vue3.0、Vite、 Ant-Design-Vue 、TypeScript
          的后台解决方案，目标是为中大型项目开发,提供现成的开箱解决方案及丰富的示例,原则上不会限制任何代码用于商用。
        </span>
      </div>
    </template>
    <a-input-number id="inputNumber" v-model:value="value" :min="1" :max="10" />
    <hr />
    <a-button type="primary">Primary Button</a-button>
    <a-button>Default Button</a-button>
    <a-button type="dashed">Dashed Button</a-button>
    <a-button type="text">Text Button</a-button>
    <a-button type="link">Link Button</a-button>
    <a-button type="link">Link Button</a-button>
    <br />
    <br />

    <a-steps :current="1">
      <a-step title="Finished" />
      <a-step title="In Progress" />
      <a-step title="Waiting" />
    </a-steps>
    <br />
    <br />

    <v-button type="primary">Primary Button</v-button>
    <v-button>Default Button</v-button>
    <v-button type="dashed">Dashed Button</v-button>
    <v-button type="text">Text Button</v-button>
    <v-button type="link">Link Button</v-button>
    <v-button type="link">Link Button</v-button>
    <br />
    <br />

    <a-tooltip placement="topLeft" title="Prompt Text">
      <a-button>Align edge / 边缘对齐</a-button>
    </a-tooltip>
  </PageWrapper>
</template>
<script lang="ts" setup name="AboutPage">
  import { PageWrapper } from '/@/components/Page'
  import { reactive, ref } from 'vue'

  const value = ref(1)
</script>
