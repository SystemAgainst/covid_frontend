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
    {
        path: '/client/create-request',
        alias: '/client/create-request',
        name: 'createRequest',
        component: () => import('../views/RequestView.vue'),
    },
    {
        path: '/client/waiting',
        alias: '/client/waiting',
        name: 'waiting',
        component: () => import('../views/WaitingView.vue'),
    },
    {
        path: '/client/success',
        alias: '/client/success',
        name: 'success',
        component: () => import('../views/SuccessView.vue'),
    },
    {
        path: '/admin-auth',
        alias: '/admin-auth',
        name: 'adminAuth',
        component: () => import('../views/AuthView.vue'),
    },
    {
        path: '/admin/list',
        alias: '/admin/list',
        name: 'AdminList',
        component: () => import('../views/AdminList.vue'),
    },
    {
        path: '/admin/client-detail/:id',
        alias: '/admin/client-detail',
        name: 'ClientDetail',
        component: () => import('../views/ClientDetail.vue'),
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
});

export default router;
