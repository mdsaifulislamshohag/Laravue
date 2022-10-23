import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import home from "../components/ExampleComponent.vue";
import login from '../components/login.vue';
import register from '../components/register.vue';

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
            meta: {
                title: process.env.APP_NAME + ' || Home'
            }
        },
        {
            path: '/login',
            name: 'login',
            component: login,
            meta: {
                title: process.env.APP_NAME + ' || Login'
            } 
        }, 
        {
            path: '/register',
            name: 'register',
            component: register,
            meta: {
                title: process.env.APP_NAME + ' || Login'
            } 
        }, 
    ],
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        };
    }
});
