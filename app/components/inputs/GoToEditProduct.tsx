"use client";
import { useRouter } from "next/navigation";
import Button from "./Button";

interface ProductDetailsProps {
  product: any;
}

const GoToEditProduct = ({ product }: ProductDetailsProps) => {
  const router = useRouter();

  const ProductGo = () => {
    router.push(`/admin/edit/${product.id}`);
    router.refresh;
  };

  return (
    <div>
      <Button label="Edytuj" onClick={ProductGo} />
    </div>
  );
};

export default GoToEditProduct;
