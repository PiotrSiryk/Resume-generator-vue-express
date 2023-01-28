import ResumeListVue from "@/views/ResumeList.vue";
import MainView from "@/views/MainView.vue";
import type { RouteRecordRaw } from "vue-router";

export enum ResumeNames {
  Main = "Main",
  ResumeList = "ResumeList",
}

const resumesRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: ResumeNames.Main,
    component: MainView,
  },
  {
    path: "/resumeList",
    name: ResumeNames.ResumeList,
    component: ResumeListVue,
  },
];

export default resumesRoutes;
