<template>
    <h1 class="title">{{ msg }}</h1>
</template>

<script lang="ts">
    export default {
        name: 'HelloWorld',
        props: {
            msg: {
                type: String,
                default: 'aaa',
            },
        },
    };
</script>

<style scoped>
    .title {
        color: aquamarine;
    }
</style>
