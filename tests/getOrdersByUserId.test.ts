import prisma from "@/libs/prismadb";
import getOrdersByUserId from "@/actions/getOrdersByUserId";
import { expect } from "@jest/globals";

jest.mock("@/libs/prismadb", () => ({
  order: {
    findMany: jest.fn(),
  },
}));

describe("getOrdersByUserId", () => {
  it("should return orders for the specified user", async () => {
    const mockOrders = [
      {
        id: "1",
        userId: "user1",
        createDate: new Date(),
        user: { id: "user1", name: "User 1" },
      },
      {
        id: "2",
        userId: "user1",
        createDate: new Date(),
        user: { id: "user1", name: "User 1" },
      },
    ];

    const userId = "user1";

    (prisma.order.findMany as jest.Mock).mockResolvedValue(mockOrders);

    const result = await getOrdersByUserId(userId);

    expect(prisma.order.findMany).toHaveBeenCalledWith({
      include: {
        user: true,
      },
      orderBy: {
        createDate: "desc",
      },
      where: {
        userId: userId,
      },
    });
    expect(result).toEqual(mockOrders);
  });
});
