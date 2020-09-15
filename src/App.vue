<template>
    <HelloWorld msg="Hello Vue 3.0 + Vite" />
    <router-view />
</template>

<script lang="ts">
    import HelloWorld from './components/HelloWorld.vue';

    export default {
        name: 'App',
        components: {
            HelloWorld,
        },
    };
</script>
