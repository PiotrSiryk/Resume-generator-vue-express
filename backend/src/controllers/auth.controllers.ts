import { UserModel } from "@/models/userModel";
import {
  addRefreshTokenToWhitelist,
  deleteRefreshToken,
  findRefreshTokenById,
} from "@/services/auth.service";
import {
  generateRefreshToken,
  generateTokens,
  hashToken,
} from "@/services/jwt.service";
import {
  createUser,
  findUserByEmail,
  findUserById,
} from "@/services/users.service";
import express from "express";
import { v4 as uuidv4 } from "uuid";
import jwt, { JwtPayload } from "jsonwebtoken";

export async function refreshTokenController(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      res.status(400);
      throw new Error("Missing refresh token");
    }
    const secretRefresh = process.env.JWT_REFRESH_SECRET;

    if (secretRefresh) {
      const jwtPayload = jwt.verify(refreshToken, secretRefresh);
      if (typeof jwtPayload !== "string" && jwtPayload.jti) {
        const existingRefreshToken = await findRefreshTokenById(jwtPayload.jti);
        if (!existingRefreshToken || existingRefreshToken.revoked === true) {
          res.status(401);
          throw new Error("Unauthorized");
        }
        const hashedToken = hashToken(refreshToken);
        if (hashedToken !== existingRefreshToken.hashedToken) {
          res.status(401);
          throw new Error("Unauthorized");
        }

        const user = await findUserById(jwtPayload.userId);
        if (!user) {
          res.status(401);
          throw new Error("Unauthorized");
        }
        await deleteRefreshToken(existingRefreshToken.id);
        const jti = uuidv4();

        const { accessToken, refreshToken: newRefreshToken } = generateTokens(
          user,
          jti
        );
        if (newRefreshToken) {
          await addRefreshTokenToWhitelist({
            jti,
            refreshToken: newRefreshToken,
            userId: user.id,
          });
        }
        res.json({
          accessToken,
          refreshToken: newRefreshToken,
        });

        console.log(user);
      }
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
}

export async function loginController(
  req: express.Request,
  res: express.Response
) {
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
}
export async function registerController(
  req: express.Request,
  res: express.Response
) {
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
  }
}
