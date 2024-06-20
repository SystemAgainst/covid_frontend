import { createWebHistory, createRouter } from 'vue-router';
import UserDataView from "../views/UserDataView.vue";

const routes = [
    {
        path: '/client/create',
        alias: '/',
        name: 'home',
        component: UserDataView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
});

export default router;
