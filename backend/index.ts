import express, { Express } from "express";
import dotenv from "dotenv";
import { authRouter } from "@/routes/auth.routes";
import axios from "axios";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

process.env.PORT = "3000";
const app: Express = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/auth", authRouter);
const port = process.env.PORT;

axios
  .post(
    "http://localhost:3000/auth/login/",
    {
      email: "name@test.com",
      password: "12345678",
    },
    { headers: { "Content-Type": "application/json" } }
  )
  .then((response) => {
    axios.post(
      "http://localhost:3000/auth/refreshToken/",
      {
        refreshToken: response.data.refreshToken,
      },
      { headers: { "Content-Type": "application/json" } }
    );
  });

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:3000`);
});
