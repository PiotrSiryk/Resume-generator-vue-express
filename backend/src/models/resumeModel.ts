import prisma from "@/client";

export class ResumeModel {
  id: string = "";
  name: string = "";
  async saveResumeToDb() {
    // await prisma.resume.create({ data: { name: this.name } });
  }
}
