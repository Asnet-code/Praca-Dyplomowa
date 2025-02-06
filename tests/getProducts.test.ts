import prisma from "@/libs/prismadb";
import getProducts, { IProductParams } from "@/actions/getProducts";
import { expect } from "@jest/globals";

jest.mock("@/libs/prismadb", () => ({
  product: {
    findMany: jest.fn(),
  },
}));

describe("getProducts", () => {
  it("should return products based on category", async () => {
    const mockProducts = [
      {
        id: 1,
        name: "Product 1",
        description: "Description 1",
        category: "Category 1",
      },
      {
        id: 2,
        name: "Product 2",
        description: "Description 2",
        category: "Category 1",
      },
    ];

    const params: IProductParams = {
      category: "Category 1",
      searchTerm: "Product",
    };

    (prisma.product.findMany as jest.Mock).mockResolvedValue(mockProducts);

    const result = await getProducts(params);

    expect(prisma.product.findMany).toHaveBeenCalledWith({
      where: {
        category: "Category 1",
        OR: [
          {
            name: {
              contains: "Product",
              mode: "insensitive",
            },
            description: {
              contains: "Product",
              mode: "insensitive",
            },
          },
        ],
      },
    });
    expect(result).toEqual(mockProducts);
  });
});
