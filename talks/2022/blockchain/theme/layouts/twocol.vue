<template>
    <default>
        <div class="head" v-bind:class="color">
            <h1 v-if="tip" class="tip">{{ tip }}</h1>
            <div class="twocols">
                <div class="twocol" v-bind:class="color1">
                    <slot />
                </div>
                <div class="twocol" v-bind:class="color2">
                    <slot name="right" />
                </div>
            </div>
        </div>
    </default>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import Default from "../layouts/default.vue";
const components = defineComponent({ Default });

const props = defineProps({
    color: {
        type: String,
    },
    color1: {
        type: String,
    },
    color2: {
        type: String,
    },
    tip: {
        type: String,
    },
});
</script>
