"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Container from "./Container";

const SelectCategory = () => {
  const router = useRouter();
  return (
    <main>
      <Container>
        <div className="p-4 sm:p-16 pt-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl-grid-cols-3 2xl:grid-cols-3 gap-8">
            <div
              onClick={() => router.push("kategorie?category=Komputery")}
              className="cursor-pointer transition hover:scale-105 text-center"
            >
              <div className="flex flex-col items-center w-full gap-1">
                <div className="aspect-square overflow-hidden relative w-full">
                  <Image
                    fill
                    src="/category/Komputer.jpg"
                    alt="Komputer"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="mt-4 text-lg sm:text-2xl">Komputery</div>
              </div>
            </div>
            {/*----------------------------------------------------------------------------------------*/}
            <div
              onClick={() => router.push("kategorie?category=Laptopy")}
              className="cursor-pointer transition hover:scale-105 text-center"
            >
              <div className="flex flex-col items-center w-full gap-1">
                <div className="aspect-square overflow-hidden relative w-full">
                  <Image
                    fill
                    src="/category/laptop.webp"
                    alt="Komputer"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="mt-4 text-lg sm:text-2xl">Laptopy</div>
              </div>
            </div>
            {/*----------------------------------------------------------------------------------------*/}
            <div
              onClick={() => router.push("kategorie?category=Monitory")}
              className="cursor-pointer transition hover:scale-105 text-center"
            >
              <div className="flex flex-col items-center w-full gap-1">
                <div className="aspect-square overflow-hidden relative w-full">
                  <Image
                    fill
                    src="/category/monitor.jpg"
                    alt="Komputer"
                    className="object-contain"
                  />
                </div>
                <div className="mt-4 text-lg sm:text-2xl">Monitory</div>
              </div>
            </div>
            {/*----------------------------------------------------------------------------------------*/}
            <div
              onClick={() => router.push("kategorie?category=Peryferia")}
              className="cursor-pointer transition hover:scale-105 text-center"
            >
              <div className="flex flex-col items-center w-full gap-1">
                <div className="aspect-square overflow-hidden relative w-full">
                  <Image
                    fill
                    src="/category/peryferia.jpg"
                    alt="Komputer"
                    className="object-contain"
                  />
                </div>
                <div className="mt-4 text-lg sm:text-2xl">Peryferia</div>
              </div>
            </div>
            {/*----------------------------------------------------------------------------------------*/}
            <div
              onClick={() => router.push("kategorie?category=Second%20hand")}
              className="cursor-pointer transition hover:scale-105 text-center"
            >
              <div className="flex flex-col items-center w-full gap-1">
                <div className="aspect-square overflow-hidden relative w-full">
                  <Image
                    fill
                    src="/category/rozne.jpg"
                    alt="Komputer"
                    className="object-contain"
                  />
                </div>
                <div className="mt-4 text-lg sm:text-2xl">Używane/Różne</div>
              </div>
            </div>
            {/*----------------------------------------------------------------------------------------*/}
            <div
              onClick={() => router.push("website")}
              className="cursor-pointer transition hover:scale-105 text-center"
            >
              <div className="flex flex-col items-center w-full gap-1">
                <div className="aspect-square overflow-hidden relative w-full">
                  <Image
                    fill
                    src="/AsnetBg.png"
                    alt="Komputer"
                    className="object-contain"
                  />
                </div>
                <div className="mt-4 text-lg sm:text-2xl">
                  Strony internetowe
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default SelectCategory;
