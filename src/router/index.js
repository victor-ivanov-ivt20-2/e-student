import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Preview from '../views/Preview.vue'
const routes = [
    {
        path: '/e-student/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/e-student/preview',
        name: 'Preview',
        component: Preview
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router