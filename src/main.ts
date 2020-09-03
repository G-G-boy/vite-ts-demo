import { createApp } from 'vue'
import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import store from "./store"
import App from './App.vue'
import Index from './pages/Index.vue'
import antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'
import './index.css'

const routes: RouteRecordRaw[] = [
    {
        path: '',
        redirect: '/index'
    },
    {
        path: '/index',
        name: 'Index',
        component: Index
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('./pages/Home.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(router).use(store).use(antd).mount('#app');
