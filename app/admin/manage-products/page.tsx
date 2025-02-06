import Container from "@/app/components/Container";
import ManageProductsClient from "./ManageProductsClient";
import getProducts from "@/actions/getProducts";

const ManageProducts = async () => {
  const products = await getProducts({ category: null });
  return (
    <div className="pt-8">
      <Container>
        <ManageProductsClient products={products} />
      </Container>
    </div>
  );
};

export default ManageProducts;
