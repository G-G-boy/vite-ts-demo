<template>
    <div>{{ a }}</div>
</template>

<script lang="ts">
    export default {
        name: 'One',
        setup() {
            return {
                a: import.meta.env.VITE_BASE_URL,
            };
        },
    };
</script>

<style scoped></style>
