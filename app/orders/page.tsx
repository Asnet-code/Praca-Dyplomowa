import Container from "@/app/components/Container";
import getCurrentUser from "@/actions/getCurrentUser";
import getOrdersByUserId from "@/actions/getOrdersByUserId";
import OrdersClient from "./OrderClient";
import NullData from "../components/inputs/NullData";
import Link from "next/link";

const Orders = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <div>
        <NullData title="Nie masz konta, załóż jedno by móc widzieć swoje zamówienia." />
        <Link
          href="/login"
          className="text-slate-500 w-full  rounded-md flex items-center justify-center text-xl md:text-xl p-4"
        >
          Zaloguj się
        </Link>
        <Link
          href="/register"
          className="text-slate-500 w-full rounded-md flex items-center justify-center text-xl md:text-xl p-4"
        >
          Zarejestruj się
        </Link>
      </div>
    );
  }

  const orders = await getOrdersByUserId(currentUser.id);

  if (!orders) {
    return <NullData title="Nie masz jeszcze zamówień..." />;
  }

  return (
    <div className="pt-8">
      <Container>
        <OrdersClient orders={orders} />
      </Container>
    </div>
  );
};

export default Orders;
