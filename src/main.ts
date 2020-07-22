import { createApp } from 'vue'
import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import App from './App.vue'
import Index from './pages/Index.vue'
import './index.css'

const routes: RouteRecordRaw[] = [
    {
        path: '',
        redirect: '/index'
    },
    {
        path: '/index',
        component: Index
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(router).mount('#app');
