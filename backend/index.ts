import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { Resume } from "./src/models/resumeModel";

dotenv.config();

process.env.PORT = "3000";

const app: Express = express();
const prisma = new PrismaClient();
const port = process.env.PORT;

async function testConnection() {
  const resume = new Resume();
  resume.name = `name-${Math.random() * 100000}`;
  resume.saveResumeToDb();
}

testConnection().finally(async () => {
  await prisma.$disconnect();
});

/* app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:3000`);
}); */
