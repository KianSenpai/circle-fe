import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BookDetail from '../views/BookDetail.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/book/:id',
        name: 'book detail',
        component: BookDetail,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
