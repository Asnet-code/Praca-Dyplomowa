"use client";

import { User, Order } from "@prisma/client";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { formatPrice } from "@/utils/formatPrice";
import Heading from "@/app/components/Heading";
import Status from "@/app/components/Status";
import {
  MdAccessTimeFilled,
  MdDelete,
  MdDeliveryDining,
  MdDone,
  MdRemoveRedEye,
} from "react-icons/md";

import { useCallback } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import moment from "moment";
import ActionBtn from "@/app/components/inputs/ActionBtn";

interface ManageOrdersClientProps {
  orders: ExtendedOrder[];
}

type ExtendedOrder = Order & {
  user: User;
};

const ManageOrdersClient: React.FC<ManageOrdersClientProps> = ({ orders }) => {
  const router = useRouter();
  let rows: any = [];

  if (orders) {
    rows = orders.map((order) => {
      return {
        id: order.id,
        customer: order.user.name,
        amount: formatPrice(order.amount / 100),
        paymentStatus: order.status,
        date: moment(order.createDate).fromNow(),
        deliveryStatus: order.deliveryStatus,
      };
    });
  }

  //-------------------------------------------------Kolumny---------------------------------------------------------------
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 220 },
    { field: "customer", headerName: "Klient", width: 130 },

    {
      field: "amount",
      headerName: "Kwota",
      width: 130,
      renderCell: (params) => {
        return (
          <div className="font-bold text-slate-800">{params.row.amount}</div>
        );
      },
    },

    {
      field: "deliveryStatus",
      headerName: "Status przesyłki",
      width: 130,
      renderCell: (params) => {
        return (
          <div>
            {params.row.deliveryStatus === "wtrakcie" ? (
              <Status
                text="w trakcie"
                icon={MdAccessTimeFilled}
                bg="bg-slate-200"
                color="text-slate-700"
              />
            ) : params.row.deliveryStatus === "wyslany" ? (
              <Status
                text="wyslany"
                icon={MdDeliveryDining}
                bg="bg-purple-200"
                color="text-purple-700"
              />
            ) : params.row.deliveryStatus === "dostarczony" ? (
              <Status
                text="dostarczony"
                icon={MdDone}
                bg="bg-green-200"
                color="text-green-700"
              />
            ) : (
              <></>
            )}
          </div>
        );
      },
    },

    {
      field: "date",
      headerName: "Czas utworzenia",
      width: 130,
    },

    {
      field: "action",
      headerName: "Akcje",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="flex justify-between gap-4 w-full">
            <ActionBtn
              icon={MdAccessTimeFilled}
              onClick={() => {
                handlePending(params.row.id);
              }}
            />
            <ActionBtn
              icon={MdDeliveryDining}
              onClick={() => {
                handleDispatch(params.row.id);
              }}
            />
            <ActionBtn
              icon={MdDone}
              onClick={() => {
                handleDeliver(params.row.id);
              }}
            />
            <ActionBtn
              icon={MdRemoveRedEye}
              onClick={() => {
                router.push(`/order/${params.row.id}`);
              }}
            />
            <ActionBtn
              icon={MdDelete}
              onClick={() => {
                handleDelete(params.row.id);
              }}
            />
          </div>
        );
      },
    },
  ];

  const handlePending = useCallback((id: string) => {
    axios
      .put("/api/order", {
        id,
        deliveryStatus: "wtrakcie",
      })
      .then((res) => {
        toast.success("Zaktualizowano produkt");
        router.refresh();
      })
      .catch((err) => {
        toast.error("Coś poszło nie tak");
        console.log(err);
      });
  }, []);

  const handleDispatch = useCallback((id: string) => {
    axios
      .put("/api/order", {
        id,
        deliveryStatus: "wyslany",
      })
      .then((res) => {
        toast.success("Zaktualizowano produkt");
        router.refresh();
      })
      .catch((err) => {
        toast.error("Coś poszło nie tak");
        console.log(err);
      });
  }, []);

  const handleDeliver = useCallback((id: string) => {
    axios
      .put("/api/order", {
        id,
        deliveryStatus: "dostarczony",
      })
      .then((res) => {
        toast.success("Zaktualizowano zamówienie");
        router.refresh();
      })
      .catch((err) => {
        toast.error("Błąd");
        console.log(err);
      });
  }, []);

  const handleDelete = useCallback((id: string) => {
    axios
      .delete(`/api/order/${id}`)
      .then((res) => {
        toast.success("Zamówienie usunięte");
        router.refresh();
      })
      .catch((err) => {
        toast.error("Nie można usunąć zamówienia");
        console.log(err);
      });
  }, []);

  //---------------------------------------------------------------------------------------

  return (
    <div className="max-w-[1150px] m-auto text-xl">
      <div className="mb-4 mt-8">
        <Heading title="Zarządzaj Zamówieniami" center />
      </div>

      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 20]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </div>
  );
};

export default ManageOrdersClient;
