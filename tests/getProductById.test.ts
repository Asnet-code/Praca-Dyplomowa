import prisma from "@/libs/prismadb";
import getProductById, { IParams } from "@/actions/getProductById";
import { expect } from "@jest/globals";

jest.mock("@/libs/prismadb", () => ({
  product: {
    findUnique: jest.fn(),
  },
}));

describe("getProductById", () => {
  it("return product when exists", async () => {
    const mockProduct = {
      id: "1",
      name: "Product 1",
      description: "Description 1",
    };

    const params: IParams = { productId: "1" };

    (prisma.product.findUnique as jest.Mock).mockResolvedValue(mockProduct);

    const result = await getProductById(params);

    expect(prisma.product.findUnique).toHaveBeenCalledWith({
      where: { id: "1" },
    });
    expect(result).toEqual(mockProduct);
  });
});
