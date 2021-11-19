import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        name:'index',
        component: () => import('../view/index/index.vue'),
        redirect: '/home',
        children:[
            {
                path:'/home',
                name:'home',
                component: () => import('../view/index/home.vue')
            },
            {
                path:'/search',
                name:'search',
                component: () => import('../view/index/search.vue')
            },
            {
                path:'/more',
                name:'more',
                component: () => import('../view/index/more.vue')
            },
            {
                path:'/my',
                name:'my',
                component: () => import('../view/index/index.vue'),
                children:[
                    {
                        path:'',
                        name:'my',
                        component: () => import('../view/index/my.vue'),
                    },
                    {
                        path:'selftabel',
                        name:'selftabel',
                        component: () => import('../view/index/myCom/selfTabel.vue'),
                    },
                    {
                        path:'select',
                        name:'select',
                        component: () => import('../view/index/myCom/select.vue'),
                    },
                ]
            },
        ]
    },
    {
        path:'/login',
        name:'login',
        component: () => import('../view/index/login.vue')
    },
    
]
export const router = new VueRouter({
    routes
})
