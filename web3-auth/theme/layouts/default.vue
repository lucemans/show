<template>
  <div class="bg-main slidev-layout">
    <div class="my-auto">
      <slot />
    </div>
    <div class="footer">
      <div>{{ website }}</div>
      <div>{{ handle ? "@" + handle : "" }}</div>
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