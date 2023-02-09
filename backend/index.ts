import express, { Express, Request, Response } from "express";
import expressSession from "express-session";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { ResumeModel } from "./src/models/resumeModel";

dotenv.config();

process.env.PORT = "3000";

const app: Express = express();
const prisma = new PrismaClient();
const port = process.env.PORT;
const session = expressSession();

/* app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:3000`);
}); */
