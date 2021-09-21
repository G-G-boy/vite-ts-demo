<template>
    <h1>this is home</h1>
    <van-button @click="gotoIndex">go to Index</van-button>
    <h1>store.count:{{ count }}</h1>
    <van-button @click="handleIncrement">增加</van-button>
    <van-button @click="handleDecrement">减少</van-button>
</template>

<script lang="ts">
    import {computed, watchEffect, watch} from 'vue';
    import {useRouter, useRoute} from 'vue-router';
    import {useStore} from 'vuex';

    function useStoreCount() {
        const store = useStore<{count: number}>();

        const count = computed(() => store.state.count);

        function handleIncrement() {
            store.commit('increment');
        }

        function handleDecrement() {
            store.commit('decrement');
        }

        return {
            count,
            handleIncrement,
            handleDecrement,
        };
    }

    export default {
        name: 'Home',
        setup() {
            const {count, handleDecrement, handleIncrement} = useStoreCount();
            const router = useRouter();
            const route = useRoute();
            console.log(route.query);
            const gotoIndex = () => {
                router.push({path: '/index'});
            };

            watchEffect((onInvalidate) => {
                console.log('watchEffect-------', count.value);
                onInvalidate(() => {
                    console.log('更新之前============', count.value);
                });
            });

            watch(
                () => count.value,
                (value, oldValue, onInvalidate) => {
                    console.log('watch+++++++++++', value, oldValue);
                    onInvalidate(() => {
                        console.log('watch更新之前', count.value);
                    });
                },
            );

            return {
                gotoIndex,
                count,
                handleDecrement,
                handleIncrement,
            };
        },
    };
</script>

<style scoped></style>
