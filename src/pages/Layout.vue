<template>
    <a-layout id="components-layout-demo-top-side-2">
        <a-layout-header class="header">
            <div class="logo"></div>
            <a-menu
                theme="dark"
                mode="horizontal"
                v-model:selectedKeys="selectedKeys1"
                :style="{lineHeight: '64px'}"
            >
                <a-menu-item key="1" @click="gotoOne"> nav 1 </a-menu-item>
                <a-menu-item key="2" @click="gotoTwo"> nav 2 </a-menu-item>
                <a-menu-item key="3" @click="gotoThree"> nav 3 </a-menu-item>
            </a-menu>
        </a-layout-header>
        <a-layout>
            <a-layout-sider width="200" style="background: #fff">
                <a-menu
                    mode="inline"
                    v-model:selectedKeys="selectedKeys2"
                    v-model:openKeys="openKeys"
                    :style="{height: '100%', borderRight: 0}"
                >
                    <a-sub-menu key="sub1">
                        <template #title>
                            <span><user-outlined />系统管理</span>
                        </template>
                        <a-menu-item key="one" @click="gotoOne">系统设置</a-menu-item>
                        <a-menu-item key="two" @click="gotoTwo">权限管理</a-menu-item>
                        <a-menu-item key="three" @click="gotoThree">任务管理</a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="sub2">
                        <template #title>
                            <span><laptop-outlined />subnav 2</span>
                        </template>
                        <a-menu-item key="5">option5</a-menu-item>
                        <a-menu-item key="6">option6</a-menu-item>
                        <a-menu-item key="7">option7</a-menu-item>
                        <a-menu-item key="8">option8</a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="sub3">
                        <template #title>
                            <span><notification-outlined />subnav 3</span>
                        </template>
                        <a-menu-item key="9">option9</a-menu-item>
                        <a-menu-item key="10">option10</a-menu-item>
                        <a-menu-item key="11">option11</a-menu-item>
                        <a-menu-item key="12">option12</a-menu-item>
                    </a-sub-menu>
                </a-menu>
            </a-layout-sider>
            <a-layout style="padding: 0 24px 0 24px">
                <a-breadcrumb style="margin: 16px 0">
                    <a-breadcrumb-item v-for="arr in pathArr">{{ arr }}</a-breadcrumb-item>
                </a-breadcrumb>
                <a-layout-content
                    :style="{background: '#fff', padding: '24px', margin: 0, minHeight: '280px'}"
                >
                    <router-view />
                </a-layout-content>
                <a-layout-footer>Copyright©DFox. All Rights Reserved.</a-layout-footer>
            </a-layout>
        </a-layout>
    </a-layout>
</template>

<script lang="ts">
    import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons-vue';
    import {ref} from 'vue';
    import {useRouter} from 'vue-router';

    export default {
        name: 'Layout',
        components: {
            UserOutlined,
            LaptopOutlined,
            NotificationOutlined,
        },
        setup() {
            const router = useRouter();

            const selectedKeys1 = ref<string[]>(['1']);
            const selectedKeys2 = ref<string[]>(['one']);
            const openKeys = ref<string[]>(['sub1']);
            const collapsed = ref<boolean>(false);
            const pathArr = ref(['']);

            const {fullPath} = router.currentRoute.value;
            pathArr.value = fullPath.split('/').filter((path) => path !== '');
            selectedKeys2.value = [
                pathArr.value.length > 1 ? pathArr.value[pathArr.value.length - 1] : 'one',
            ];

            router.afterEach(() => {
                const {fullPath} = router.currentRoute.value;
                pathArr.value = fullPath.split('/').filter((path) => path !== '');
            });

            function gotoOne() {
                router.push('/layout/one');
            }

            function gotoTwo() {
                router.push('/layout/two');
            }

            function gotoThree() {
                router.push('/layout/three');
            }

            return {
                selectedKeys1,
                selectedKeys2,
                collapsed,
                openKeys,
                gotoOne,
                gotoTwo,
                gotoThree,
                pathArr,
            };
        },
    };
</script>

<style scoped>
    #components-layout-demo-top-side-2 {
        height: 100vh;
    }
    #components-layout-demo-top-side-2 .logo {
        width: 120px;
        height: 31px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px 28px 16px 0;
        float: left;
    }
</style>
