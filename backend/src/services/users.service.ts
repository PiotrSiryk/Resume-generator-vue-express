import bcrypt from "bcrypt";
import prisma from "@/client";
import { UserModel } from "@/models/userModel";

export function findUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}
export function findUserById(id: string) {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
}

export function createUser(user: UserModel) {
  user.password = bcrypt.hashSync(user.password, 12);
  return prisma.user.create({ data: user });
}
