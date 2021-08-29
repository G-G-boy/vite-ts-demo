<template>
    <h1 class="title">{{ msg }}</h1>
</template>

<script lang="ts" setup>
    import {defineProps} from 'vue';

    defineProps({
        msg: {
            type: String,
            default: 'aaa',
        },
    });
</script>

<style scoped>
    .title {
        color: aquamarine;
    }
</style>
