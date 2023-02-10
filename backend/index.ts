import express, { Express, Request, Response } from "express";
import expressSession from "express-session";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { ResumeModel } from "./src/models/resumeModel";
/* import jsonWebToken from "jsonwebtoken";
const jwt = require('jsonwebtoken'); */
import * as jwt from "jsonwebtoken";

dotenv.config();

process.env.PORT = "3000";

const app: Express = express();

const prisma = new PrismaClient();
const port = process.env.PORT;
const session = expressSession();
// const jwt = new jsonWebToken();

function generateAccessToken(user: any) {
  if (process.env.JWT_ACCESS_SECRET) {
    return jwt.sign({ userId: user.id }, process.env.JWT_ACCESS_SECRET, {
      expiresIn: "5m",
    });
  }
}

function generateRefreshToken(user: any, jti: any) {
  if (process.env.JWT_REFRESH_SECRET) {
    return jwt.sign(
      {
        userId: user.id,
        jti,
      },
      process.env.JWT_REFRESH_SECRET,
      {
        expiresIn: "8h",
      }
    );
  }
}

/* app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:3000`);
}); */
