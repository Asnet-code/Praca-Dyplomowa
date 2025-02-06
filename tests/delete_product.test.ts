import { DELETE } from "@/app/api/product/[id]/route";
import { expect, test } from "@jest/globals";

jest.mock("@prisma/client", () => {
  const prismaMock = {
    product: {
      delete: jest.fn().mockResolvedValue({
        id: "test-product-id",
        name: "Test Product",
      }),
    },
    $disconnect: jest.fn(),
  };
  return { PrismaClient: jest.fn(() => prismaMock) };
});

jest.mock("@/actions/getCurrentUser", () => jest.fn());

describe("DELETE /product", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should delete the product when user is ADMIN", async () => {
    const mockUser = { id: "admin-user-id", role: "ADMIN" };

    const getCurrentUser = require("@/actions/getCurrentUser");
    getCurrentUser.mockResolvedValue(mockUser);

    const requestMock = {} as any as Request;
    const paramsMock = { id: "test-product-id" };

    const res = await DELETE(requestMock, { params: paramsMock });

    const json = await res.json();

    expect(res.status).toBe(200);
    expect(json).toHaveProperty("id", "test-product-id");
    expect(json).toHaveProperty("name", "Test Product");
  });

  it("should return an error if user is not ADMIN", async () => {
    const mockUser = { id: "non-admin-user-id", role: "USER" };

    const getCurrentUser = require("@/actions/getCurrentUser");
    getCurrentUser.mockResolvedValue(mockUser);

    const requestMock = {} as any as Request;
    const paramsMock = { id: "test-product-id" };

    const res = await DELETE(requestMock, { params: paramsMock });

    expect(res.status).toBe(403);
  });

  it("should return an error if no user is logged in", async () => {
    const getCurrentUser = require("@/actions/getCurrentUser");
    getCurrentUser.mockResolvedValue(null);

    const requestMock = {} as any as Request;
    const paramsMock = { id: "test-product-id" };

    const res = await DELETE(requestMock, { params: paramsMock });

    expect(res.status).toBe(401);
  });
});
