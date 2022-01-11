<template>
    <default>
        <div class="head" v-bind:class="color">
            <h1 v-if="tip" class="tip">{{ tip }}</h1>
            <div class="speaker">
                <img src="/assets/avatar.png" />
                <div>
                    <div class="hooks">
                        <div />
                        <div />
                        <div />
                    </div>
                    <h1>{{ name }}</h1>
                    <h3>{{ bio }}</h3>
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
    name: {
        type: String,
    },
    avatar: {
        type: String,
    },
    bio: {
        type: String,
    },
    tip: {
        type: String,
    },
});
</script>
