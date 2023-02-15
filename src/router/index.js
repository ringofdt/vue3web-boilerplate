// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import { vwHome, vwAbout, vwLogout } from '@/views'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: vwHome,
    },
    {
        path: '/about',
        name: 'About',
        component: vwAbout,
    },
    {
        path: '/logout',
        name: 'Logout',
        component: vwLogout,
        meta: {
            public: false,
        },
    }

]

const router = createRouter({ history: createWebHistory(), routes })
export default router
