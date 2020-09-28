import {createApp} from 'vue';
import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import antd from 'ant-design-vue';
import store from './store';
import App from './App.vue';
import Index from './pages/Index.vue';
import Layout from './pages/Layout.vue';
import 'ant-design-vue/dist/antd.css';
import './index.css';

const routes: RouteRecordRaw[] = [
    {
        path: '',
        redirect: '/layout',
    },
    {
        path: '/index',
        name: 'Index',
        component: Index,
    },
    {
        path: '/layout',
        name: 'Layout',
        component: Layout,
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('./pages/Home.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).use(store).use(antd).mount('#app');
