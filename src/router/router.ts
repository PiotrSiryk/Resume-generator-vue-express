import { createRouter, createWebHistory } from "vue-router";
import resumesRoutes from "./resumes.routes";
import NotFound from "@/views/NotFound.vue";
import resumesInfoRoutes from "./resumeInfo.routes";
import accountRoutes from "@/router/account.routes";

export enum GlobalRoutes {
  NotFound = "NotFound",
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...resumesRoutes,
    ...resumesInfoRoutes,
    ...accountRoutes,
    {
      path: "/:catchAll(.*)",
      name: GlobalRoutes.NotFound,
      component: NotFound,
    },
  ],
});

export default router;
