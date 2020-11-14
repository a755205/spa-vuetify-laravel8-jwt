import Vue from 'vue';
import VueRouter from 'vue-router';
import admin from './admin';

Vue.use(VueRouter);

const routes = [
    admin,
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import(/* webpackChunkName: "login" */ '../components/login.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
