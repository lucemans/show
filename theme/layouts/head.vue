<template>
  <default>
    <div class="head" v-bind:class="color">
      <h1 v-if="tip" class="tip">{{tip}}</h1>
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
  tip: {
    type: String
  }
});
</script>