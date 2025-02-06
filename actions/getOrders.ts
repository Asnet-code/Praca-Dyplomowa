import prisma from "@/libs/prismadb";

export default async function getOrders() {
  try {
    const orders = await prisma.order.findMany({
      where: {
        user: { isNot: null }, // Filtrowanie zamówień bez użytkownika
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
