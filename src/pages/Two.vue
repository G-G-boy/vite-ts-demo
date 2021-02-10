<template>
    <van-button color="#7232dd">单色按钮</van-button>
    <van-button color="#7232dd" plain>单色按钮</van-button>
    <van-button color="linear-gradient(to right, #ff6034, #ee0a24)"> 渐变色按钮 </van-button>
    <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">标签</van-tabbar-item>
        <van-tabbar-item icon="search">标签</van-tabbar-item>
        <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
</template>

<script>
    import {Button, Tabbar, TabbarItem} from 'vant';

    export default {
        name: 'Two',
        components: {
            [Button.name]: Button,
            [Tabbar.name]: Tabbar,
            [TabbarItem.name]: TabbarItem,
        },
        setup() {
            return {
                active: 2,
            };
        },
    };
</script>

<style scoped></style>
