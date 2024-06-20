import { createWebHistory, createRouter } from 'vue-router';
import UserDataView from "../views/UserDataView.vue";

const routes = [
    {
        path: '/client/create',
        alias: '/',
        name: 'home',
        component: UserDataView,
    },
    {
        path: '/client/has-test',
        alias: '/client/has-test',
        name: 'hasTest',
        component: () => import('../views/HasTestView.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
});

export default router;
