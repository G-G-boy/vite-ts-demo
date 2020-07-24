<template>
    <div>
        <button @click="add">add</button>
        <h1>count:{{count}}</h1>
        <button @click="changeTime">change Time</button>
        <h2>time: {{time}}</h2>
    </div>
    <div>
        <h1>count2.a:{{count2.a}}</h1>
    </div>
    <div>
        <h1>count3.b: {{count3.b}}</h1>
        <h1>count3.c: {{count3.c}}</h1>
    </div>
    <div>
        <h1>b: {{b}}</h1>
        <h1>c: {{c}}</h1>
    </div>
    <div>
        <h1>computed -> count4: {{count4}}</h1>
    </div>
</template>

<script lang="ts">
    import {ref, reactive, toRefs, computed, watch, watchEffect} from "vue";
    export default {
        name: "Index",
        setup() {
            const count = ref<number>(0);
            const count2 = ref<{a: number}>({a: 1});
            const count3 = reactive<{b: number, c: number}>({
                b: 2,
                c: 3
            });

            const time = ref<number>(new Date().getTime());
            const add = () => {
                count.value++;
                count2.value.a++;
                count3.b++;
                count3.c++;
            }

            const changeTime = () => {
                time.value = new Date().getTime();
            }
            watch(count, () => {
                console.log('count的值改变了-----',count.value);
            });
            watchEffect(() => {
                console.log('依赖变化了----', time.value, '--------',count.value);
            });
            return {
                count,
                add,
                count2,
                count3,
                ...toRefs(count3),
                count4: computed(() => count.value**2),
                time,
                changeTime
            }
        }
    }
</script>

<style scoped>

</style>
