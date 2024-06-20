import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: '/',
        alias: '/',
        name: '',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
});

export default router;
