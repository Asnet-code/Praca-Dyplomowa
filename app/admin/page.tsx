import Link from "next/link";
import Container from "../components/Container";
import Image from "next/image";
import { Teko } from "next/font/google";

import LogoutButton from "../components/inputs/LogoutButton";
const teko = Teko({ subsets: ["latin"], weight: ["500"] });

const Admin = async () => {
  return (
    <div className="pt-8">
      <Container>
        <div className="flex flex-col text-center items-center">
          <Link href={"/"}>
            <Image src="/AsnetBg2.png" alt="Logo" width={80} height={50} />
          </Link>
          <div className="pt-2 text-5xl font-bold text-orange-600">
            <p className={teko.className}>STRONA ADMINA</p>
          </div>
        </div>

        <div className=" flex gap-2 items-center justify-center">
          <p className="text-slate-900 text-2xl">
            Link do strony z usuwaniem tła:{" "}
          </p>

          <Link
            href={"https://www.remove.bg/"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-slate-500"
          >
            https://www.remove.bg/
          </Link>
        </div>
        <LogoutButton />
      </Container>
    </div>
  );
};

export default Admin;
