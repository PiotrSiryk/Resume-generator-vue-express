import { UserModel } from "@/models/userModel";
import { createUser, findUserById } from "@/services/users.service";
import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

enum AuthRoutes {
  Register = "/register",
}

router.post(AuthRoutes.Register, async (req, res, next) => {
  try {
    const body: UserModel = req.body;
    if (!body.email || !body.password) {
      res.status(400);
      throw new Error("Email and password is required");
    }

    const existingUser = await findUserById(body.email);
    if (existingUser) {
      res.status(400);
      throw new Error("Email already used");
    }

    const newUser = await createUser(body);
  } catch (error) {
    //
  }
});
