import prisma from "@/libs/prismadb";

export default async function getOrdersByUserId(userId: string) {
  try {
    const orders = await prisma.order.findMany({
      where: {
        userId: userId,
        user: { isNot: null }, // Zapewnia, że user istnieje
      },
      include: {
        user: true,
      },
      orderBy: {
        createDate: "desc",
      },
    });

    return orders;
  } catch (error: any) {
    throw new Error(error);
  }
}
