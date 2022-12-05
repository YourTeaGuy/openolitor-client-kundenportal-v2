import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import News from "@/views/News.vue";
import Shares from "@/views/Shares.vue";

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
            path: '/shares',
            name: "Shares",
            component: Shares
        }
    ]
})

export default router;