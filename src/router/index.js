import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Preview from '../views/Preview.vue'
import Lenta from '../views/Lenta.vue'
import Profile from '../views/Profile.vue'
import StudentWork from '../views/StudentWork.vue'
const routes = [
    {
        path: '/e-student/',
        name: 'Preview',
        component: Preview,
    },
    {
        path: '/e-student/lenta',
        name: 'Lenta',
        component: Lenta
    },
    {
        path: '/e-student/student-work',
        name: 'StudentWork',
        component: StudentWork
    },
    {
        path: '/e-student/profile',
        name: 'Profile',
        component: Profile
    },
    
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router