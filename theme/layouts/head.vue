<template>
  <default>
    <div class="head" v-bind:class="color">
        <slot />
    </div>
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
});
</script>