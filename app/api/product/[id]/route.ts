import getCurrentUser from "@/actions/getCurrentUser";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  if (currentUser.role !== "ADMIN") {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  try {
    const product = await prisma.product.delete({
      where: { id: params.id },
    });

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error("Error during product deletion:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: String(error) },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
