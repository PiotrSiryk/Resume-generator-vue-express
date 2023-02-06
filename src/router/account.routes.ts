import LoginView from "@/views/login/LoginView.vue";
import type { RouteRecordRaw } from "vue-router";

export enum AccountRoutesNames {
  Login = "Login",
}

const resumesInfoRoutes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: AccountRoutesNames.Login,
    component: LoginView,
  },
];

export default resumesInfoRoutes;
