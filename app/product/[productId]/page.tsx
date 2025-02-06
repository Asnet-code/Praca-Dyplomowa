import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import getProductById from "@/actions/getProductById";
import getCurrentUser from "@/actions/getCurrentUser";
import NullData from "@/app/components/inputs/NullData";
import GoToEditProduct from "@/app/components/inputs/GoToEditProduct";
import { CartContextProvider } from "@/hooks/useCart";

interface IPrams {
  productId?: string;
}

const Product = async ({ params }: { params: IPrams }) => {
  const product = await getProductById(params);
  const currentUser = await getCurrentUser();

  if (!product) return <NullData title="Produkt o tym id nie istnieje!" />;

  if (!currentUser || currentUser.role !== "ADMIN") {
    return (
      <div className="p-8">
        <Container>
          <ProductDetails product={product} />
          <div className="flex flex-col mt-20 gap-4"></div>
        </Container>
      </div>
    );
  }

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="flex justify-end pt-5">
          <GoToEditProduct product={product} />
        </div>
      </Container>
    </div>
  );
};

export default Product;
