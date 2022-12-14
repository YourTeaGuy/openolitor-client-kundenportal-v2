import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import News from "@/views/News.vue";
import Deliveries from "@/views/Deliveries.vue";
import Tasks from "@/views/Tasks.vue";

const history = createWebHistory();
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            name: "Home",
            component: Dashboard,
            meta: {
                breadcumb: "Start", // for breadcumbs
            }
        },
        {
            path: '/news',
            name: "News",
            component: News,
            meta: {
                breadcumb: "Neuigkeiten", // for breadcumbs
            }
        },
        {
            path: '/deliveries',
            name: "Deliveries",
            component: Deliveries,
            meta: {
                breadcumb: "Lieferungen", // for breadcumbs
            }
        },
        {
            path: '/tasks',
            name: "Tasks",
            component: Tasks,
            meta: {
                breadcumb: "Aufgaben", // for breadcumbs
            }
        },
    ]
})

export default router;