<template>
  <div class="bg-main slidev-layout">
    <div class="my-auto">
      <slot />
    </div>
    <div class="flex w-full justify-between px-7 py-3">
      <div class="h-fit self-end">
        <img src="/assets/ethonline.svg" class="h-8 mb-2" />
      </div>
      <div>
        <img src="/assets/ens.svg" class="h-12" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineComponent } from 'vue';
import '../styles/index.ts';
import LayoutFooter from '../components/LayoutFooter.vue'
const components = defineComponent({
})
const props = defineProps({
  website: {
    type: String,
  },
  handle: {
    type: String,
  },
  titlething: {
    type: String
  }
})
</script>