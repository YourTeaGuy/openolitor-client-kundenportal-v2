import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import News from "@/views/News.vue";

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
        }
    ]
})

export default router;