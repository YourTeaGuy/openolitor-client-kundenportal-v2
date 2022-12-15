import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import News from "@/views/News.vue";
import Tasks from "@/views/Tasks.vue";

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
            path: '/tasks',
            name: 'Tasks',
            component: Tasks
        }
    ]
})

export default router;