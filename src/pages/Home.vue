<template>
    <h1>this is home</h1>
    <button @click="gotoIndex">go to Index</button>
</template>

<script>
    import {useRouter, useRoute} from "vue-router";
    export default {
        name: "Home",
        setup() {
            const router = useRouter();
            const route = useRoute();
            console.log(route.query)
            const gotoIndex = () => {
                router.push({path: '/'});
            }
            return {
                gotoIndex
            }
        }
    }
</script>

<style scoped>

</style>
