import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './components/auth/Login.vue';
import ForgotPassword from './components/auth/ForgotPassword.vue';

import Dashboard from './components/Dashboard.vue';
import Items from './components/Items.vue';
import Warehouses from './components/Warehouses.vue';
import Dealers from './components/Dealers.vue';

Vue.use(VueRouter);
export default new VueRouter({
    routes: [
        {   
            path: '/login', 
            component: Login,
            name: 'Login Page'
        },
        {   
            path: '/', 
            component: Dashboard,
            name: 'Dashboard' 
        },
        {   
            path: '/dashboard', 
            component: Dashboard,
            name: 'Dashboard'  
        },
        {   
            path: '/forgot-password', 
            component: ForgotPassword,
            name: 'Forgot Password'  
        },
        {   
            path: '/items', 
            component: Items,
            name: 'Items',
        },
        {   
            path: '/warehouses', 
            component: Warehouses,
            name: 'Warehouses',
        },
        {   
            path: '/Dealers', 
            component: Dealers,
            name: 'Dealers',
        },
    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});