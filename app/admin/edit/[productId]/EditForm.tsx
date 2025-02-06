"use client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useState } from "react";
import axios from "axios";

import Button from "@/app/components/inputs/Button";

interface EditProps {
  product: any;
}

const EditForm: React.FC<EditProps> = ({ product }) => {
  const router = useRouter();
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [brand, setBrand] = useState(product.brand);
  //------------------------------------------------------------------------------------
  const [procesor, setProcesor] = useState(product.procesor);
  const [plyta_glowna, setPlyta_glowna] = useState(product.plyta_glowna);
  const [pamiec_ram, setPamiec_ram] = useState(product.pamiec_ram);
  const [karta_graficzna, setKarta_graficzna] = useState(
    product.karta_graficzna
  );
  const [dysk_hdd, setDysk_hdd] = useState(product.dysk_hdd);
  const [dysk_ssd, setDysk_ssd] = useState(product.dysk_ssd);
  const [obudowa, setObudowa] = useState(product.obudowa);
  const [zasilacz, setZasilacz] = useState(product.zasilacz);
  const [wyswietlacz, setWyswietlacz] = useState(product.wyswietlacz);
  const [napend, setNapend] = useState(product.napend);
  //------------------------------------------------------------------------------------
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };
  const handleBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBrand(e.target.value);
  };
  //------------------------------------------------------------------------------------
  const handleProcesorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProcesor(e.target.value);
  };
  const handlePlyta_glownaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlyta_glowna(e.target.value);
  };
  const handlePamiec_ramChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPamiec_ram(e.target.value);
  };
  const handleKarta_graficznaChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setKarta_graficzna(e.target.value);
  };
  const handleDysk_ssdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDysk_ssd(e.target.value);
  };
  const handleDysk_hddChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDysk_hdd(e.target.value);
  };
  const handleObudowaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setObudowa(e.target.value);
  };
  const handleZasilaczChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZasilacz(e.target.value);
  };
  const handleWyswietlaczChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWyswietlacz(e.target.value);
  };
  const handleNapendChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNapend(e.target.value);
  };
  //------------------------------------------------------------------------------------
  const onSubmit = async () => {
    try {
      const updatedProduct = {
        ...product,
        name,
        description,
        price,
        brand,
        procesor,
        plyta_glowna,
        pamiec_ram,
        karta_graficzna,
        dysk_hdd,
        dysk_ssd,
        obudowa,
        zasilacz,
        wyswietlacz,
        napend,
      };
      await axios.put(`/api/update/`, updatedProduct);
      toast.success("Zaktualizowano pomyślnie");
      router.refresh;
    } catch (error) {
      toast.error("Błąd przy edytowaniu");
    }
  };
  const isKomputeryCategory = () => {
    const productCategory = product.category;
    return productCategory === "Komputery";
  };

  const isLaptopCategory = () => {
    const productCategory = product.category;
    return productCategory === "Laptopy";
  };
  const ProductGo = () => {
    router.push(`/product/${product.id}`);
    router.refresh;
  };
  return (
    <div className=" text-slate-500 text-sm">
      <div>
        {isKomputeryCategory() ? (
          <div className="flex flex-col gap-5 ">
            <div className="flex flex-col ">
              Nazwa:
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Nowa nazwa"
                className="border border-gray-300 p-2"
              />
            </div>
            <div className="flex flex-col ">
              Marka:
              <input
                type="text"
                value={brand}
                onChange={handleBrandChange}
                placeholder="Nowa marka"
                className="border border-gray-300 p-2"
              />
            </div>
            <div className="flex flex-col ">
              Opis:
              <textarea
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Nowy opis"
                className=" peer
        w-full
        p-4
        pt-6
        max-h-[150px]
        min-h-[150px]
        outline-none
        bg-white
        font-light
        border-2
        rounded-md
        transition
        disabled:opacity-70
        disabled:cursor-not-allowed"
              />
            </div>
            <div className="flex flex-col ">
              Cena:
              <input
                type="number"
                value={price}
                onChange={handlePriceChange}
                placeholder="Nowa cena"
                className="border border-gray-300 p-2"
              />
            </div>
            <div className="flex flex-col ">
              Procesor:
              <input
                type="text"
                value={procesor}
                onChange={handleProcesorChange}
                placeholder="Nowy procesor"
                className="border border-gray-300 p-2"
              />
            </div>
            <div className="flex flex-col ">
              Płyta Głowna:
              <input
                type="text"
                value={plyta_glowna}
                onChange={handlePlyta_glownaChange}
                placeholder="Nowa plyta główna"
                className="border border-gray-300 p-2"
              />
            </div>
            <div className="flex flex-col ">
              Pamięć Ram:
              <input
                type="text"
                value={pamiec_ram}
                onChange={handlePamiec_ramChange}
                placeholder="Nowa pamiec ram"
                className="border border-gray-300 p-2"
              />
            </div>
            <div className="flex flex-col ">
              Karta Graficzna:
              <input
                type="text"
                value={karta_graficzna}
                onChange={handleKarta_graficznaChange}
                placeholder="Nowa karta graficzna"
                className="border border-gray-300 p-2"
              />
            </div>
            <div className="flex flex-col ">
              Dysk SSD:
              <input
                type="text"
                value={dysk_ssd}
                onChange={handleDysk_ssdChange}
                placeholder="Nowy dysk SSD"
                className="border border-gray-300 p-2"
              />
            </div>
            <div className="flex flex-col ">
              Dyska HDD:
              <input
                type="text"
                value={dysk_hdd}
                onChange={handleDysk_hddChange}
                placeholder="Nowy dysk HDD"
                className="border border-gray-300 p-2"
              />
            </div>
            <div className="flex flex-col ">
              Obudowa:
              <input
                type="text"
                value={obudowa}
                onChange={handleObudowaChange}
                placeholder="Nowa obudowa"
                className="border border-gray-300 p-2"
              />
            </div>
            <div className="flex flex-col ">
              Zasilacz:
              <input
                type="text"
                value={zasilacz}
                onChange={handleZasilaczChange}
                placeholder="Nowy zasilacz"
                className="border border-gray-300 p-2"
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-5 ">
            <div className="flex flex-col ">
              Nazwa:
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Nowa nazwa"
                className="border border-gray-300 p-2"
              />
            </div>
            {/*---------------------------------------------------------------------------------------------*/}
            <div className="flex flex-col">
              Marka:
              <input
                type="text"
                value={brand}
                onChange={handleBrandChange}
                placeholder="Nowa marka"
                className="border border-gray-300 p-2"
              />
            </div>
            {/*---------------------------------------------------------------------------------------------*/}
            <div className="w-full relative">
              Opis:
              <textarea
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Nowy opis"
                className=" peer
        w-full
        p-4
        pt-6
        max-h-[150px]
        min-h-[150px]
        outline-none
        bg-white
        font-light
        border-2
        rounded-md
        transition
        disabled:opacity-70
        disabled:cursor-not-allowed"
              />
            </div>
            {/*---------------------------------------------------------------------------------------------*/}
            <div className="flex flex-col">
              Cena:
              <input
                type="number"
                value={price}
                onChange={handlePriceChange}
                placeholder="Nowa cena"
                className="border border-gray-300 p-2"
              />
            </div>
          </div>
        )}

        {isLaptopCategory() && (
          <>
            <div className="flex flex-col">
              Wyswietlacz:
              <input
                type="text"
                value={wyswietlacz}
                onChange={handleWyswietlaczChange}
                placeholder="Nowy wyswietlacz"
                className="border border-gray-300 p-2"
              />
            </div>
            <div className="flex flex-col">
              Napęd:
              <input
                type="text"
                value={napend}
                onChange={handleNapendChange}
                placeholder="Nowy napęd"
                className="border border-gray-300 p-2"
              />
              <div className="flex flex-col ">
                Procesor:
                <input
                  type="text"
                  value={procesor}
                  onChange={handleProcesorChange}
                  placeholder="Nowy procesor"
                  className="border border-gray-300 p-2"
                />
              </div>
              <div className="flex flex-col ">
                Płyta Głowna:
                <input
                  type="text"
                  value={plyta_glowna}
                  onChange={handlePlyta_glownaChange}
                  placeholder="Nowa plyta główna"
                  className="border border-gray-300 p-2"
                />
              </div>
              <div className="flex flex-col ">
                Pamięć Ram:
                <input
                  type="text"
                  value={pamiec_ram}
                  onChange={handlePamiec_ramChange}
                  placeholder="Nowa pamiec ram"
                  className="border border-gray-300 p-2"
                />
              </div>
              <div className="flex flex-col ">
                Karta Graficzna:
                <input
                  type="text"
                  value={karta_graficzna}
                  onChange={handleKarta_graficznaChange}
                  placeholder="Nowa karta graficzna"
                  className="border border-gray-300 p-2"
                />
              </div>
              <div className="flex flex-col ">
                Dysk SSD:
                <input
                  type="text"
                  value={dysk_ssd}
                  onChange={handleDysk_ssdChange}
                  placeholder="Nowy dysk SSD"
                  className="border border-gray-300 p-2"
                />
              </div>
              <div className="flex flex-col ">
                Dyska HDD:
                <input
                  type="text"
                  value={dysk_hdd}
                  onChange={handleDysk_hddChange}
                  placeholder="Nowy dysk HDD"
                  className="border border-gray-300 p-2"
                />
              </div>
            </div>
          </>
        )}
      </div>

      {/*---------------------------------------------------------------------------------------------*/}
      <div className="flex justify-center pt-10 ">
        <div className="w-1/2 flex gap-10 ">
          <Button label="Zapisz" onClick={onSubmit} />
          <Button label="Przejdz do produktu" onClick={ProductGo} />
        </div>
      </div>
    </div>
  );
};

export default EditForm;
