<template>
    <div :style="'width:' + width + 'px;height:' + height + 'px'">
        <div class="poof">
            <img :src="hell + src" loading="lazy"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
const components = defineComponent({});
const hell = import.meta.env.BASE_URL;

const props = defineProps({
    src: {
        type: String,
    },
    width: {
        type: String,
    },
    height: {
        type: String,
    },
});
</script>
