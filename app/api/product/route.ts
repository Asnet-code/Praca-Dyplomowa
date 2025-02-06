import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  if (currentUser.role !== "ADMIN") {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }
  const body = await request.json();
  const {
    name,
    description,
    price,
    brand,
    category,
    inStock,
    images,
    procesor,
    plyta_glowna,
    pamiec_ram,
    karta_graficzna,
    dysk_ssd,
    dysk_hdd,
    obudowa,
    zasilacz,
    wyswietlacz,
    napend,
  } = body;

  const product = await prisma.product.create({
    data: {
      name,
      description,
      brand,
      category,
      inStock,
      images,
      procesor,
      plyta_glowna,
      pamiec_ram,
      karta_graficzna,
      dysk_ssd,
      dysk_hdd,
      obudowa,
      zasilacz,
      wyswietlacz,
      napend,
      price: parseFloat(price),
    },
  });
  return NextResponse.json(product);
}

export async function PUT(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return NextResponse.error();
  }

  const body = await request.json();
  const { id, inStock } = body;
  const product = await prisma.product.update({
    where: { id: id },
    data: {
      inStock,
    },
  });
  return NextResponse.json(product, { status: 200 });
}
