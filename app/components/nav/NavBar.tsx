import Link from "next/link";
import Container from "../Container";
import Image from "next/image";
import { Teko } from "next/font/google";
import UserMenu from "./UserMenu";
import { Suspense } from "react";
import Categories from "./Categories";
import GoToAdmin from "./GotToAdmin";
import CartCount from "./CartCount";
import { BsBoxSeam } from "react-icons/bs";

const teko = Teko({ subsets: ["latin"], weight: ["500"] });

const NavBar = async () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div
        className="
    sticky
    top-0
    w-full
    bg-white
    z-30
    "
      >
        <div className="py-2 border-b-[1px]">
          <Container>
            <div className="items-center flex justify-between">
              <div className="flex items-center">
                <Link href={"/"}>
                  <Image
                    src="/AsnetBg2.png"
                    alt="Logo"
                    width={80}
                    height={50}
                  />
                </Link>
                <Link href={"/"} className={teko.className}>
                  <div className="font-bold text-3xl text-orange-600">
                    ASNET
                  </div>
                  <div className="text-slate-600 text-xl">
                    Sklep Komputerowy
                  </div>
                </Link>
              </div>
              <div className="flex flex-row  gap-3 items-center p-3 px-5 text-slate-500">
                <GoToAdmin />

                <Link href={"/orders"}>
                  <BsBoxSeam size={30} />
                </Link>
                <CartCount />

                <UserMenu />
              </div>
            </div>
          </Container>
        </div>
        <Categories />
      </div>
    </Suspense>
  );
};

export default NavBar;
