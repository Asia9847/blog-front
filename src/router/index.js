import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/',
            name: 'home',
            component: () =>
                import ('@/views/home'),
            children: [{
                path: '/',
                component: () =>
                    import ('@/views/home/list')
            }, {
                path: '/article',
                component: () =>
                    import ('@/views/home/detail')
            }, ]
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        return { x: 0, y: 0 }
    }
})