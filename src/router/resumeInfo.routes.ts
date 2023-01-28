import BasicInfo from "@/views/BasicInfo.vue";
import type { RouteRecordRaw } from "vue-router";

export enum ResumeIfnoNames {
  Basic = "Basic",
}

const resumesInfoRoutes: RouteRecordRaw[] = [
  {
    path: "/basic",
    name: ResumeIfnoNames.Basic,
    component: BasicInfo,
  },
];

export default resumesInfoRoutes;
