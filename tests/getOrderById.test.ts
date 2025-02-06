import prisma from "@/libs/prismadb";
import getOrderById, { IParams } from "@/actions/getOrderById";
import { expect } from "@jest/globals";

jest.mock("@/libs/prismadb", () => ({
  order: {
    findUnique: jest.fn(),
  },
}));

describe("getOrderById", () => {
  it("should return the order when it exists", async () => {
    const mockOrder = { id: "1", product: "Product 1", quantity: 2 };

    const params: IParams = { orderId: "1" };

    (prisma.order.findUnique as jest.Mock).mockResolvedValue(mockOrder);

    const result = await getOrderById(params);

    expect(prisma.order.findUnique).toHaveBeenCalledWith({
      where: { id: "1" },
    });
    expect(result).toEqual(mockOrder);
  });
});
