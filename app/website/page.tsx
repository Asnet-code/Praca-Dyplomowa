"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Container from "../components/Container";
import { FaDiamond } from "react-icons/fa6";
import { Roboto_Mono } from "next/font/google";
const roboto_Mono = Roboto_Mono({
  subsets: ["cyrillic-ext"],
  weight: ["300"],
  style: ["italic"],
});

const Website = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div>
      <Container>
        <div className="pt-3 font-bold  gap-5">
          <p className="text-orange-500 text-4xl ">STRONY INTERNETOWE</p>
          <p className="text-slate-600 text-2xl">PORFOLIA-MENU-SKLEPY</p>
          <p className="text-slate-400 text-md">+INNE</p>
        </div>
        <div>
          <p className="text-xl text-slate-600 pt-10 font-semibold p-2">
            Oferujemy szeroki zakres usług, w tym:
          </p>
          <div className="flex items-center gap-2 p-4">
            <p className="text-orange-500">
              <FaDiamond />
            </p>
            <p className="text-slate-700">
              Tworzenie responsywnych stron internetowych, które zachwycają
              swoim designem i funkcjonalnością.
            </p>
          </div>
          {/*-------------------------------------------------------------*/}
          <div className="flex items-center gap-2 p-4">
            <p className="text-orange-500">
              <FaDiamond />
            </p>
            <p className="text-slate-700">
              Tworzenie informacyjnych stron restauracyjnych/internetowych.
              Jeśli prowadzisz restaurację lub inne przedsiębiorstwo, które
              wymaga obecności online, możemy pomóc Ci w stworzeniu strony
              internetowej. Nasze projekty są zoptymalizowane pod kątem
              wygodnego przeglądania asortymentu online przez Twoich klientów.
            </p>
          </div>
          {/*-------------------------------------------------------------*/}
          <div className="flex items-center gap-2 p-4">
            <p className="text-orange-500">
              <FaDiamond />
            </p>
            <p className="text-slate-700">
              Tworzenie profesionalnych portfoli online które pomogą ci się
              wyróżnić w sieci i zwiększyć widoczność twojej marki.
            </p>
          </div>
        </div>

        <div className="p-2 pt-10">
          <div className={roboto_Mono.className}>
            <p className="text-center text-2xl font-bold text-orange-600">
              &quot;Nasze własne dzieło&quot;
            </p>
            <p className="p-8 text-justify text-sm">
              &quot;Naszą stronę stworzyliśmy samodzielnie, wyposażając ją w
              możliwość dodawania, usuwania oraz edycji treści z poziomu panelu
              administratora, a także wiele innych funkcjonalności. Dodatkowo,
              sami zadbalśmy o estetykę i prezentację naszej strony&quot;
            </p>
          </div>
        </div>

        <div className=" p-2">
          <p className="text-xl text-slate-600 pt-10 font-semibold p-2">
            Kontakt telefoniczny:
          </p>

          <p className="p-2 ">
            Proszę o kontakt pod numerem
            <a className="text-slate-600 text-xl font-semibold">
              +48 790 227 601
            </a>
            , abyśmy mogli wstępnie nakreślić szczegóły projektu oraz ustalić,
            czy jesteśmy w stanie go zrealizować, by następnie umówić termin
            spotkania. Czekamy na Twój telefon!
          </p>
        </div>
      </Container>
      {/*--------------------------------------------------------------------------- */}
      <div
        className="grid grid-cols-2 hidden
        "
        onClick={() => window.open("https://3dprintpal.vercel.app/")}
      >
        <div className="cursor-pointer  rounded-sm p-2 text-center text-sm">
          <div className="flex flex-col items-center w-full gap-1">
            <div
              className="aspect-square overflow-hidden relative  max-h-[500px]
            min-h-[300px]"
            >
              <Image
                fill
                src={"/portfolio.png"}
                alt="name"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="mt-4">Porfolio</div>
            <div className="font-semibold">Link</div>
          </div>
        </div>

        {/*--------------------------------------------------------------------------- */}
      </div>

      {/*--------------------------------------------------------------------------- */}
      <div className="text-center flex flex-col items-center pt-10">
        <div
          className="cursor-pointer 
    border-[2px] 
    border-orange-400
    hover:bg-orange-50
      rounded-xl 
      p-4
      w-1/2 
     "
          onClick={handleClick}
        >
          Powrót
        </div>
      </div>
    </div>
  );
};

export default Website;
