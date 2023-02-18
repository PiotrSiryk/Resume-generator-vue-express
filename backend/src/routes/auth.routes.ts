import { UserModel } from "@/models/userModel";
import { addRefreshTokenToWhitelist } from "@/services/auth.service";
import { generateRefreshToken, generateTokens } from "@/services/jwt.service";
import {
  createUser,
  findUserByEmail,
  findUserById,
} from "@/services/users.service";
import express from "express";
import { v4 as uuidv4 } from "uuid";

const authRouter = express.Router();

enum AuthRoutes {
  Register = "/register",
  Login = "/login",
}

authRouter.post(AuthRoutes.Register, async (req, res, next) => {
  try {
    const body: UserModel = req.body;

    if (!body.email || !body.password) {
      res.status(400);
      throw new Error("Email and password is required");
    }

    const existingUser = await findUserByEmail(body.email);

    if (existingUser) {
      res.status(400);
      throw new Error("Email already used");
    }

    const newUser = await createUser(body);
    const jti = uuidv4();
    const tokens = generateTokens(newUser, jti);
    if (tokens.refreshToken) {
      await addRefreshTokenToWhitelist({
        jti,
        refreshToken: tokens.refreshToken,
        userId: newUser.id,
      });

      res.json({
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
      });
    }
  } catch (error) {
    console.log(error);

    //
  }
});
authRouter.post(AuthRoutes.Login, async (req, res, next) => {
  try {
    const body: UserModel = req.body;
    if (!body.email || !body.password) {
      res.status(400);
      throw new Error("Email and password is required");
    }
    const existingUser = await findUserByEmail(body.email);
    if (!existingUser) {
      res.status(403);
      throw new Error("Invalid login credentials.");
    }
    const jti = uuidv4();
    const tokens = generateTokens(existingUser, jti);
    if (tokens.refreshToken) {
      await addRefreshTokenToWhitelist({
        jti,
        refreshToken: tokens.refreshToken,
        userId: existingUser.id,
      });

      res.json({
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
      });
    }
    //
  } catch (error) {
    console.log(error);

    //
  }
});

export { authRouter };
