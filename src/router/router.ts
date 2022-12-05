import { createWebHashHistory, createRouter } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";

const history = createWebHashHistory();
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            name: "Home",
            component: HelloWorld
        }
    ]
})

export default router;