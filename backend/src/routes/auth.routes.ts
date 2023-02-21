import express from "express";

import {
  loginController,
  refreshTokenController,
  registerController,
} from "@/controllers/auth.controllers";

const authRouter = express.Router();

enum AuthRoutes {
  Register = "/register",
  Login = "/login",
  RefreshToken = "/refreshToken",
  RevokeTokens = "/revokeRefreshTokens",
}

authRouter.post(AuthRoutes.Register, registerController);
authRouter.post(AuthRoutes.Login, loginController);
authRouter.post(AuthRoutes.RefreshToken, refreshTokenController);

export { authRouter };
