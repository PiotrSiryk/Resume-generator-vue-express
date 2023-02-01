import { PrismaClient } from "@prisma/client";

export class Resume {
  id: string = "";
  name: string = "";
  async saveResumeToDb() {
    const prisma = new PrismaClient();
    await prisma.resume.create({ data: { name: this.name } });
  }
}
