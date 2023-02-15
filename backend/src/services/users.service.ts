import bcrypt from "bcrypt";
import prisma from "@/client";
import { UserModel } from "@/models/userModel";
import { User } from "@prisma/client";

export function findUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}
export async function findUserById(id: string): Promise<User | undefined> {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  if (user) {
    return user;
  } else {
    return undefined;
  }
}

export function createUser(user: UserModel) {
  user.password = bcrypt.hashSync(user.password, 12);
  return prisma.user.create({ data: user });
}
