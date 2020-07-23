<template>
    <h1 class="title">{{ msg }}</h1>
</template>

<script lang="ts">


    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        setup(props: any) {

        }
    }
</script>

<style scoped>
  .title {
    color: aquamarine;
  }
</style>
