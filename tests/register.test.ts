import { expect } from "@jest/globals";
import { POST } from "@/app/api/register/route";

jest.mock("@/libs/prismadb", () => ({
  user: {
    create: jest.fn().mockResolvedValue({
      id: "test-user-id",
      name: "Test User",
      email: "test@example.com",
      hashedPassword: "hashedPassword",
    }),
  },
}));

describe("POST /register", () => {
  it("should register a new user", async () => {
    const reqBody = {
      name: "Test User",
      email: "test@example.com",
      password: "password123",
    };
    const requestMock = {
      json: jest.fn().mockResolvedValue(reqBody),
    } as any as Request;

    const res = await POST(requestMock);

    const json = await res.json();

    expect(res.status).toBe(200);
    expect(json).toHaveProperty("id", "test-user-id");
    expect(json).toHaveProperty("email", "test@example.com");
    expect(json).toHaveProperty("name", "Test User");
    expect(json.hashedPassword).toBeDefined();
  });
});
