"use client";

import Heading from "@/app/components/Heading";
import Status from "@/app/components/Status";
import { formatPrice } from "@/utils/formatPrice";
import { Order } from "@prisma/client";
import moment from "moment";
import { MdAccessTimeFilled, MdDeliveryDining, MdDone } from "react-icons/md";
import OrderItem from "./OrderItem";

interface OrderDetailsProps {
  order: Order;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order }) => {
  return (
    <div className="max-w=[1150px] m-aut flex flex-col gap-2">
      <div className="mt-8">
        <Heading title="Szczegóły Produktu" />
      </div>
      <div>Id Zamówienia: {order.id}</div>
      <div className="flex gap-2 items-center">
        <div>Status przesyłki: </div>
        <div>
          {order.deliveryStatus === "wtrakcie" ? (
            <Status
              text="W trakcie"
              icon={MdAccessTimeFilled}
              bg="bg-slate-200"
              color="text-slate-700"
            />
          ) : order.deliveryStatus === "wyslany" ? (
            <Status
              text="Przygotowywanie"
              icon={MdDeliveryDining}
              bg="bg-purple-200"
              color="text-purple-700"
            />
          ) : order.deliveryStatus === "dostarczony" ? (
            <Status
              text="Dostarczono"
              icon={MdDone}
              bg="bg-green-200"
              color="text-green-700"
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      <div>Data: {moment(order.createDate).fromNow()}</div>
      <div>
        <h2 className="font-semibold mt-4 mb-2">Zamówione produkty</h2>
        <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center">
          <div className="col-span-2 justify-start">Produkty</div>
          <div className="justify-self-center">Cena</div>
          <div className="justify-self-center">Ilość</div>
          <div className="justify-self-end">Suma</div>
        </div>
        {order.products &&
          order.products.map((item) => {
            return <OrderItem key={item.id} item={item}></OrderItem>;
          })}
      </div>
    </div>
  );
};

export default OrderDetails;
