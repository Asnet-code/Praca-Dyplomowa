import prisma from "@/libs/prismadb";
import getOrders from "@/actions/getOrders";
import { expect } from "@jest/globals";

jest.mock("@/libs/prismadb", () => ({
  order: {
    findMany: jest.fn(),
  },
}));

describe("getOrders", () => {
  it("should return orders with users included", async () => {
    const mockOrders = [
      { id: 1, createDate: new Date(), user: { id: 1, name: "User1" } },
      { id: 2, createDate: new Date(), user: { id: 2, name: "User2" } },
    ];

    (prisma.order.findMany as jest.Mock).mockResolvedValue(mockOrders);

    const result = await getOrders();

    expect(prisma.order.findMany).toHaveBeenCalledWith({
      include: {
        user: true,
      },
      orderBy: {
        createDate: "desc",
      },
    });
    expect(result).toEqual(mockOrders);
  });
});
