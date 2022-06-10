import { createRouter , createWebHistory } from 'vue-router'
import searchWorkOrder from '../components/searchWorkOrder.vue'

const routes = [
    {
        path: '/',
        name : 'Main',
        component : searchWorkOrder
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router