<template>
    <h1 class="title">{{ msg }}</h1>
    <button @click="count++">count is: {{ count }}</button>
</template>

<script lang="ts">
    import {ref} from "vue";

    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        setup(props: any) {
            const count = ref<number>(0);

            return {
                count
            }
        }
    }
</script>

<style scoped>
  .title {
    color: aquamarine;
  }
</style>
