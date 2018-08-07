import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './components/auth/Login.vue';
import ForgotPassword from './components/auth/ForgotPassword.vue';

import Dashboard from './components/Dashboard.vue';

Vue.use(VueRouter);
export default new VueRouter({
    routes: [
        {   
            path: '/login', 
            component: Login 
        },
        {   
            path: '/', 
            component: Dashboard 
        },
        {   
            path: '/dashboard', 
            component: Dashboard 
        },
        {   
            path: '/forgot-password', 
            component: ForgotPassword 
        }
    ]
});