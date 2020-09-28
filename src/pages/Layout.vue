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
                <a-menu-item key="1"> nav 1 </a-menu-item>
                <a-menu-item key="2"> nav 2 </a-menu-item>
                <a-menu-item key="3"> nav 3 </a-menu-item>
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
                        <a-menu-item key="1">系统设置</a-menu-item>
                        <a-menu-item key="2">权限管理</a-menu-item>
                        <a-menu-item key="3">任务管理</a-menu-item>
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
                    <a-breadcrumb-item>Home</a-breadcrumb-item>
                    <a-breadcrumb-item>List</a-breadcrumb-item>
                    <a-breadcrumb-item>App</a-breadcrumb-item>
                </a-breadcrumb>
                <a-layout-content
                    :style="{background: '#fff', padding: '24px', margin: 0, minHeight: '280px'}"
                >
                    Content
                </a-layout-content>
                <a-layout-footer>Copyright©DFox. All Rights Reserved.</a-layout-footer>
            </a-layout>
        </a-layout>
    </a-layout>
</template>

<script lang="ts">
    import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons-vue';
    import {ref} from 'vue';

    export default {
        name: 'Layout',
        components: {
            UserOutlined,
            LaptopOutlined,
            NotificationOutlined,
        },
        setup() {
            const selectedKeys1 = ref<string[]>(['1']);
            const selectedKeys2 = ref<string[]>(['1']);
            const openKeys = ref<string[]>(['sub1']);
            const collapsed = ref<boolean>(false);

            return {
                selectedKeys1,
                selectedKeys2,
                collapsed,
                openKeys,
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
