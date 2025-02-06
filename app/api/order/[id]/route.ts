import getCurrentUser from "@/actions/getCurrentUser";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) return NextResponse.error();
  if (currentUser.role !== "ADMIN") {
    return NextResponse.error();
  }

  try {
    const order = await prisma.order.delete({
      where: { id: params.id },
    });

    return NextResponse.json(order);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  } finally {
    await prisma.$disconnect();
  }
}
//-----------------------------------------------------------------
