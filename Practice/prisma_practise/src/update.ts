import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UpdateParams {
    firtName: string;
    lastName: string;
}

async function updateUser(email: string, {
    firtName,
    lastName
}: UpdateParams) {
  const res = await prisma.user.update({
    where: { email },
    data: {
      firtName,
      lastName
    }
  });
  console.log(res);
}

updateUser("admin1", {
    firtName: "new name",
    lastName: "singh"
})