import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/use-scroll-end-detection",
      name: "useScrollEndDetection",
      component: () => import("@/views/useScrollEndDetection.vue"),
    },
    {
      path: "/use-api-request",
      name: "useApiRequest",
      component: () => import("@/views/useApiRequest.vue"),
    },
    {
      path: "/use-mouse",
      name: "useMouse",
      component: () => import("@/views/useMouse.vue"),
    },
  ],
});

export default router;
