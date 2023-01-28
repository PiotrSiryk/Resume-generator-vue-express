import { createRouter, createWebHistory } from "vue-router";
import resumesRoutes from "./resumes.routes";
import NotFound from "@/views/NotFound.vue";

enum GlobalRoutes {
  NotFound = "NotFound",
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...resumesRoutes,
    {
      path: "/:catchAll(.*)",
      name: GlobalRoutes.NotFound,
      component: NotFound,
    },
  ],
});

export default router;
