<template>
    <div :style="'width:' + width + 'px;height:' + height + 'px'">
        <div class="poof">
            <img :src="src" loading="lazy"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
const components = defineComponent({});

const props = defineProps({
    src: {
        type: String,
    },
    width: {
        type: Number,
    },
    height: {
        type: Number,
    },
});
</script>
