import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(email: string, password: string, firtName: string, lastName: string) {
  const res = await prisma.user.create({
    data: {
        email,
        firtName,
        lastName,
        password

    }
  })
  console.log(res)
}

insertUser("admin1asc", "123456", "shahbaz", "singh")