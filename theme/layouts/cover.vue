<template>
  <default class="cover" v-bind:class="color">
    <slot />
  </default>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import Default from '../layouts/default.vue';
const components = defineComponent({ Default });

const props = defineProps({
  color: {
    type: String,
  },
  line: {
    type: String
  }
});
</script>