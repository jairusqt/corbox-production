import { createRouter , createWebHistory } from 'vue-router'
import mainPage from '../view/Main.vue'
import LogIn from '../view/LogIn.vue'
import paperRoll from '../view/paperRoll.vue'

const routes = [
    {
        path: '/',
        name : 'LogIn',
        component : LogIn
    },
    {
        path: '/index',
        name : 'mainPage',
        component : mainPage
    },
    {
        path: '/paperRoll',
        name :'paperRoll',
        component : paperRoll
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router