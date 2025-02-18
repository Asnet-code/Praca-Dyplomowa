"use client";

import { Product } from "@prisma/client";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { formatPrice } from "@/utils/formatPrice";
import Status from "@/app/components/Status";
import {
  MdCached,
  MdClose,
  MdDelete,
  MdDone,
  MdRemoveRedEye,
} from "react-icons/md";
import { useCallback } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { deleteObject, getStorage, ref } from "firebase/storage";
import firebaseApp from "@/libs/firebase";
import ActionBtn from "@/app/components/inputs/ActionBtn";
import { FaEdit } from "react-icons/fa";

interface ManageProductsClientProps {
  products: Product[];
}

const ManageProductsClient: React.FC<ManageProductsClientProps> = ({
  products,
}) => {
  const router = useRouter();
  const storage = getStorage(firebaseApp);
  let rows: any = [];

  if (products) {
    rows = products.map((product) => {
      return {
        id: product.id,
        name: product.name,
        price: formatPrice(product.price),
        category: product.category,
        brand: product.brand,
        inStock: product.inStock,
        images: product.images,
        procesor: product.procesor,
        plyta_glowna: product.plyta_glowna,
        karta_graficzna: product.karta_graficzna,
        dysk_ssd: product.dysk_ssd,
        dysk_hdd: product.dysk_hdd,
        obudowa: product.obudowa,
        zasilacz: product.zasilacz,
      };
    });
  }

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Nazwa", width: 220 },
    {
      field: "price",
      headerName: "Cena(PLN)",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="font-bold text-slate-800">{params.row.price}</div>
        );
      },
    },
    { field: "category", headerName: "Kategoria", width: 100 },
    { field: "brand", headerName: "Marka", width: 100 },
    {
      field: "inStock",
      headerName: "Dostępność",
      width: 120,
      renderCell: (params) => {
        return (
          <div>
            {params.row.inStock === true ? (
              <Status
                text="Tak"
                icon={MdDone}
                bg="bg-teal-200"
                color="text-teal-700"
              />
            ) : (
              <Status
                text="Nie"
                icon={MdClose}
                bg="bg-rose-200"
                color="text-rose-700"
              />
            )}
          </div>
        );
      },
    },
    {
      field: "Akcje",
      headerAlign: "center",
      width: 200,

      renderCell: (params) => {
        return (
          <div className="flex justify-between gap-4 w-full">
            <ActionBtn
              icon={MdCached}
              onClick={() => {
                handleToggleStock(params.row.id, params.row.inStock);
              }}
            />
            <ActionBtn
              icon={MdDelete}
              onClick={() => {
                handleDelete(params.row.id, params.row.images);
              }}
            />
            <ActionBtn
              icon={FaEdit}
              onClick={() => {
                router.push(`edit/${params.row.id}`);
              }}
            />
            <ActionBtn
              icon={MdRemoveRedEye}
              onClick={() => {
                window.open(`/product/${params.row.id}`, "_blank");
              }}
            />
          </div>
        );
      },
    },
  ];

  const handleToggleStock = useCallback((id: string, inStock: boolean) => {
    axios
      .put("/api/product", {
        id,
        inStock: !inStock,
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

  //-------------------------------Usuwanie produktu--------------------------------
  const handleDelete = useCallback(async (id: string, images: any) => {
    toast("Usuwanie produktu, poczekaj chwile");

    const handleImageDelete = async () => {
      try {
        for (const item of images) {
          if (item.image) {
            const imageRef = ref(storage, item.image);
            await deleteObject(imageRef);
            console.log("Zdjęcie usunięte", item.image);
          }
        }
      } catch (error) {
        return console.log("Error usuwanie zdjęcia", error);
      }
    };
    await handleImageDelete();
    axios
      .delete(`/api/product/${id}`)
      .then((res) => {
        toast.success("Produkt usunięty");
        router.refresh();
      })
      .catch((err) => {
        toast.error("Nie można usunąć produktu");
        console.log(err);
      });
  }, []);
  //--------------------------------------------------------d-------------------------------

  return (
    <div className="max-w-[1150px] m-auto text-xl">
      <div className="mb-4 mt-8">Zarządzaj Produktami</div>

      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 20 },
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

export default ManageProductsClient;
