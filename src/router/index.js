import { createRouter , createWebHistory } from 'vue-router'
import MainPage from '../view/Main.vue'
import LogIn from '../view/LogIn.vue'

const routes = [
    {
        path: '/',
        name : 'LogIn',
        component : LogIn
    },
    {
        path: '/mainpage',
        name : 'MainPage',
        component : MainPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router