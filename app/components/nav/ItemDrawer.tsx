import { Dialog, Transition } from "@headlessui/react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdFacebook } from "react-icons/md";
import MenuItem from "./MenuItem";

interface ItemDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const ItemDrawer: React.FC<ItemDrawerProps> = ({ isOpen, onClose }) => {
  const handleClick = () => {
    onClose();
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-40" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-start">
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            onClick={onClose}
                            type="button"
                            className="rounded-md bg-white text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Close Panel</span>
                            <IoClose size={32} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col text-center items-center">
                      <Image
                        src="/AsnetBg2.png"
                        alt="Logo"
                        width={80}
                        height={50}
                      />

                      <div className="flex gap-10 pt-4 items-center pb-5">
                        <div>
                          <div className="font-bold">E-mail</div>
                          <a
                            className="underline"
                            href="mailto:asnet@pro.onet.pl"
                          >
                            asnet@pro.onet.pl
                          </a>
                          <div className="pt-2 ">
                            <hr />
                            <p className="pt-2 text-2xl text-slate-900">
                              Kontakt:
                            </p>
                            <div
                              className="flex items-center justify-center text-xl text-slate-800
                               font-bold"
                            >
                              <p>+48 &nbsp;</p>
                              <p className="font-bold text-slate-800  text-xl transition hover:scale-105">
                                797 822 000
                              </p>
                            </div>
                            <Link href="/map" onClick={onClose}>
                              <p className="transition hover:scale-105">
                                Rynek 29, 59-500 Złotoryja
                              </p>
                            </Link>
                          </div>
                          <div className="pt-5">
                            O Nas
                            <p className="p-4 text-justify text-sm">
                              Firma Asnet istnieje od 1996 roku, specjalizując
                              się w sprzedaży oraz serwisie sprzętu
                              komputerowego. Dzięki naszemu doświadczeniu
                              oferujemy usługi najwyższej jakości w
                              konkurencyjnych cenach, ciesząc się zaufaniem
                              licznych zadowolonych klientów. Oferujemy zarówno
                              nowe, jak i używane komputery, dostosowane do
                              różnorodnych potrzeb i budżetów. Zapraszamy do
                              skorzystania z naszej oferty!
                            </p>
                            <h3 className="text-base mb-2">Polub Nas</h3>
                            <div className="flex flex-col items-center gap-2 pb-10">
                              <Link href="https://www.facebook.com/profile.php?id=100086276891536">
                                <MdFacebook size={24} />
                              </Link>
                            </div>
                          </div>

                          <hr className="bg-slate-500 w-full h-px" />
                          <Link href="/map" onClick={handleClick}>
                            <MenuItem>Lokalizacja</MenuItem>
                            <hr className="bg-slate-500 w-full h-px" />
                          </Link>
                          <Link href="/website" onClick={handleClick}>
                            <MenuItem>
                              Strony Internetowe Na Zamówienie
                            </MenuItem>
                            <hr className="bg-slate-800 w-full h-px" />
                          </Link>

                          <div>
                            <h1 className="text-2xl pt-5 ">GODZINY OTWARCIA</h1>
                            <div>
                              <p className="text-dark text-xl">
                                Poniedziałek - Piątek
                              </p>
                              <p>10:00 - 17:00</p>
                            </div>
                            <div>
                              <p className="text-dark text-xl">Sobota</p>
                              <p>9:00 - 13:00</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ItemDrawer;
