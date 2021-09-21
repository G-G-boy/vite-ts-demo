import {createApp} from 'vue';
import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import store from './store';
import App from './App.vue';
import Index from './pages/Index.vue';
import './index.css';

const routes: RouteRecordRaw[] = [
    {
        path: '',
        redirect: '/home',
    },
    {
        path: '/index',
        name: 'Index',
        component: Index,
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

createApp(App).use(router).use(store).mount('#app');
