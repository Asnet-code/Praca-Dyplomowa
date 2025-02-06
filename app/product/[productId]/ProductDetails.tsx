"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/app/components/inputs/Button";
import ProductImage from "@/app/components/product/ProductImage";
import { MdCheckCircle } from "react-icons/md";
import { useCart } from "@/hooks/useCart";

interface ProductDetailsProps {
  product: any;
}

export type CartProductType = {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  selectedImg: SelectedImgType;
  quantity: number;
  price: number;
  procesor: string;
  plyta_glowna: string;
  pamiec_ram: string;
  karta_graficzna: string;
  dysk_ssd: string;
  dysk_hdd: string;
  obudowa: string;
  zasilacz: string;
  wyswietlacz: string;
  napend: string;
};

export type SelectedImgType = {
  color: string;
  colorCode: string;
  image: string;
};

const Horizontal = () => {
  return <hr className="w-[30% mt-2 mb-2]" />;
};

//--------------------------------------Start-----------------------------------
const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const { handleAddProductToCart, cartProducts } = useCart();
  const [isProductInCart, setIsProductInCart] = useState(false);
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    selectedImg: { ...product.images[0] },
    quantity: 1,
    price: product.price,
    procesor: product.procesor,
    plyta_glowna: product.plyta_glowna,
    pamiec_ram: product.pamiec_ram,
    karta_graficzna: product.karta_graficzna,
    dysk_ssd: product.dysk_ssd,
    dysk_hdd: product.dysk_hdd,
    obudowa: product.obudowa,
    zasilacz: product.zasilacz,
    wyswietlacz: product.wyswietlacz,
    napend: product.naped,
  });

  const router = useRouter();

  //--------------------------------------czy item jest w koszyku------------------------------------
  useEffect(() => {
    setIsProductInCart(false);
    if (cartProducts) {
      const existingIndex = cartProducts.findIndex(
        (item) => item.id === product.id
      );
      if (existingIndex > -1) {
        setIsProductInCart(true);
      }
    }
  }, [cartProducts]);
  //--------------------------------Colors/Images----------------------------------------------
  const handleColorSelect = useCallback(
    (value: SelectedImgType) => {
      setCartProduct((prev) => {
        return { ...prev, selectedImg: value };
      });
    },
    [cartProduct.selectedImg]
  );

  const handleGoBack = () => {
    router.push(`/kategorie?category=${product.category}`);
  };
  //--------------------------------------return-----------------------------------
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
      <ProductImage
        cartProduct={cartProduct}
        product={product}
        handleColorSelect={handleColorSelect}
      />

      <div className="flex flex-col gap-1 text-slate-500 text-sm">
        <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
        {product.brand && (
          <div className="flex flex-col">
            <div className="flex gap-1">
              <p className="font-semibold">Marka:</p>
              <p>{product.brand}</p>
            </div>
          </div>
        )}
        <div>
          <span className="font-semibold">Kategoria: </span>
          {product.category}
        </div>
        <div>
          <span className="font-semibold">Cena: </span>
          {product.price} zł
        </div>
        <Horizontal />
        <div className="text-justify">{product.description}</div>
        {/*-------------------------------------------------------*/}
        <div className="pb-2">
          {product.procesor && (
            <div className="flex flex-col">
              <div className="flex justify-between">
                <p className="font-bold">Procesor:</p>
                <p>{product.procesor}</p>
              </div>
            </div>
          )}
          {product.plyta_glowna && (
            <div className="flex flex-col">
              <div className="flex justify-between">
                <p className="font-bold">Płyta Główna:</p>
                <p>{product.plyta_glowna}</p>
              </div>
            </div>
          )}
          {product.pamiec_ram && (
            <div className="flex flex-col">
              <div className="flex justify-between">
                <p className="font-bold">Pamięć Ram:</p>
                <p>{product.pamiec_ram}</p>
              </div>
            </div>
          )}
          {product.karta_graficzna && (
            <div className="flex flex-col">
              <div className="flex justify-between">
                <p className="font-bold">Karta Graficzna:</p>
                <p>{product.karta_graficzna}</p>
              </div>
            </div>
          )}
          {product.dysk_ssd && (
            <div className="flex flex-col">
              <div className="flex justify-between">
                <p className="font-bold">Dysk SSD:</p>
                <p>{product.dysk_ssd}</p>
              </div>
            </div>
          )}
          {product.dysk_hdd && (
            <div className="flex flex-col">
              <div className="flex justify-between">
                <p className="font-bold">Dysk HDD:</p>
                <p>{product.dysk_hdd}</p>
              </div>
            </div>
          )}
          {product.obudowa && (
            <div className="flex flex-col">
              <div className="flex justify-between">
                <p className="font-bold">Obudowa:</p>
                <p>{product.obudowa}</p>
              </div>
            </div>
          )}
          {product.zasilacz && (
            <div className="flex flex-col">
              <div className="flex justify-between">
                <p className="font-bold">Zasilacz:</p>
                <p>{product.zasilacz}</p>
              </div>
            </div>
          )}
          {product.wyswietlacz && (
            <div className="flex flex-col">
              <div className="flex justify-between">
                <p className="font-bold">Wyświetlacz:</p>
                <p>{product.wyswietlacz}</p>
              </div>
            </div>
          )}
          {product.napend && (
            <div className="flex flex-col">
              <div className="flex justify-between">
                <p className="font-bold">Napęd:</p>
                <p>{product.napend}</p>
              </div>
            </div>
          )}
        </div>
        {/*-------------------------------------------------------*/}
        <hr />
        <div className="flex gap-2 pt-2">
          <div className="font-bold">Stan:</div>
          <div
            className={
              product.inStock
                ? "text-teal-400 font-bold"
                : "text-rose-400 font-bold"
            }
          >
            {product.inStock ? "Dostępny w na miejscu" : "Niedostepny"}
          </div>
        </div>
        {/*-------------------------------------------------------*/}
        <div className="pt-5">
          {isProductInCart ? (
            <>
              <p className="mb-2 text-slate-500 flex items-center gap-1">
                <MdCheckCircle className="text-teal-400" size={20} />
                <span>Produkt dodany do koszyka</span>
              </p>

              <div>
                <Button
                  label="Zobacz Koszyk"
                  outline
                  onClick={() => {
                    router.push("/cart");
                  }}
                />
              </div>
            </>
          ) : (
            <>
              <div>
                <Button
                  label="Dodaj Do Koszyka"
                  onClick={() => handleAddProductToCart(cartProduct)}
                />
              </div>
            </>
          )}
          <div className="pt-5">
            <Button label="Powrót" onClick={handleGoBack} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
