import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import News from "@/views/News.vue";
import Deliveries from "@/views/Deliveries.vue";

const history = createWebHistory();
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            name: "Home",
            component: Dashboard
        },
        {
            path: '/news',
            name: "News",
            component: News
        },
        {
            path: '/deliveries',
            name: "Deliveries",
            component: Deliveries
        }
    ]
})

export default router;