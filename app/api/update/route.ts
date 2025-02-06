import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/actions/getCurrentUser";

export async function PUT(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  if (currentUser.role !== "ADMIN") {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  try {
    const body = await request.json();
    const {
      id,
      inStock,
      name,
      description,
      price,
      brand,
      procesor,
      plyta_glowna,
      pamiec_ram,
      karta_graficzna,
      dysk_ssd,
      dysk_hdd,
      obudowa,
      zasilacz,
      napend,
      wyswietlacz,
    } = body;

    if (!id || !name) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const product = await prisma.product.update({
      where: { id: id },
      data: {
        inStock,
        name,
        description,
        price: parseFloat(price),
        brand,
        procesor,
        plyta_glowna,
        pamiec_ram,
        karta_graficzna,
        dysk_ssd,
        dysk_hdd,
        obudowa,
        zasilacz,
        napend,
        wyswietlacz,
      },
    });

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error("Error during product update:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: String(error) },
      { status: 500 }
    );
  }
}
