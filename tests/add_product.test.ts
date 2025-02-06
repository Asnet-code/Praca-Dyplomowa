import { POST } from "@/app/api/product/route";
import { expect } from "@jest/globals";

jest.mock("@/libs/prismadb", () => ({
  product: {
    create: jest.fn().mockResolvedValue({
      id: "test-product-id",
      name: "Test Product",
      price: 1000,
      inStock: true,
    }),
  },
}));

jest.mock("@/actions/getCurrentUser", () => jest.fn());

describe("POST /product", () => {
  it("should add a new product when user is ADMIN", async () => {
    const mockUser = { id: "admin-user-id", role: "ADMIN" };

    const getCurrentUser = require("@/actions/getCurrentUser");
    getCurrentUser.mockResolvedValue(mockUser);

    const reqBody = {
      name: "Test Product",
      description: "Test Description",
      price: "1000",
      brand: "Test Brand",
      category: "Test Category",
      inStock: true,
      images: ["image1.png", "image2.png"],
      procesor: "Intel",
      plyta_glowna: "ASUS",
      pamiec_ram: "16GB",
      karta_graficzna: "NVIDIA",
      dysk_ssd: "512GB",
      dysk_hdd: "1TB",
      obudowa: "CoolerMaster",
      zasilacz: "650W",
      wyswietlacz: "15.6",
      napend: "None",
    };

    const requestMock = {
      json: jest.fn().mockResolvedValue(reqBody),
    } as any as Request;

    const res = await POST(requestMock);

    const json = await res.json();

    expect(res.status).toBe(200);
    expect(json).toHaveProperty("id", "test-product-id");
    expect(json).toHaveProperty("name", "Test Product");
    expect(json).toHaveProperty("price", 1000);
    expect(json).toHaveProperty("inStock", true);
  });

  it("should return an error if user is not ADMIN", async () => {
    const mockUser = { id: "regular-user-id", role: "USER" };

    const getCurrentUser = require("@/actions/getCurrentUser");
    getCurrentUser.mockResolvedValue(mockUser);

    const requestMock = {
      json: jest.fn().mockResolvedValue({}),
    } as any as Request;

    const res = await POST(requestMock);

    expect(res.status).toBe(403);
  });
});
