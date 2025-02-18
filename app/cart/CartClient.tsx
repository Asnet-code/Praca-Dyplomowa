"use client";
import { CartContextProvider, useCart } from "@/hooks/useCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import ItemContent from "./ItemContent";
import { formatPrice } from "@/utils/formatPrice";
import { SafeUser } from "@/types";
import { useRouter } from "next/navigation";
import Button from "../components/product/Button";
import Heading from "../components/Heading";

interface CartClientProps {
  currentUser: SafeUser | null;
}

//--------------------------Gdy nic nie ma w koszyku------------------------------------------
const CartClient: React.FC<CartClientProps> = ({ currentUser }) => {
  const { cartProducts, handleClearCart, cartTotalAmount } = useCart();

  const router = useRouter();

  if (!cartProducts || cartProducts.length == 0) {
    return (
      <div className="flex flex-col items-center">
        <div className="text-2xl">Twój koszyk jest pusty</div>
        <div>
          <Link
            href={"/"}
            className="
                    text-slate-500 flex items-center gap-1 mt-2
                    "
          >
            <MdArrowBack />
            <span>Zacznij kupować</span>
          </Link>
        </div>
      </div>
    );
  }
  //-----------------------------------Gdy coś jest----------------------------------

  return (
    <div>
      <Heading title="Koszyk" center />
      <div
        className="grid
        grid-cols-5
        text-xs
        gap-4
        pb-2
        items-center
        mt-8"
      >
        <div className="col-span-2 justify-self-start">PRODUKT</div>
        <div className="justify-self-center">CENA</div>
        <div className="justify-self-center">ILOŚĆ</div>
        <div className="justify-self-end">KOSZT</div>
      </div>

      <div>
        {cartProducts &&
          cartProducts.map((item) => {
            return <ItemContent key={item.id} item={item} />;
          })}
      </div>

      <div className="border-t-[1.5px] border-slate-200 py-4 flex justify-between gap-4">
        <div className="w-[90px]">
          <Button
            label="Wyczyść koszyk"
            onClick={() => {
              handleClearCart();
            }}
            small
            outline
          />
        </div>

        <div className="text-sm flex flex-col gap-1 items-start">
          <div className="flex justify-between w-full text-base font-semibold">
            <span>Suma</span>
            <span>{formatPrice(cartTotalAmount)}</span>
          </div>
          <p className="text-slate-500">
            Podatki i wysyłka obliczone przy kupnie
          </p>
          <Button
            label={currentUser ? "Kup" : "Zaloguj się by kupić"}
            outline={currentUser ? false : true}
            onClick={() => {
              currentUser ? router.push("/checkout") : router.push("/login");
            }}
          />

          <Link
            href={"/"}
            className="
                    text-slate-500 flex items-center gap-1 mt-2
                    "
          >
            <MdArrowBack />
            <span>Kontynuj kupowanie</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartClient;
