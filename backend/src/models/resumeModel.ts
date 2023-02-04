import prisma from "@/client";

export class Resume {
  id: string = "";
  name: string = "";
  async saveResumeToDb() {
    // await prisma.resume.create({ data: { name: this.name } });
  }
}
