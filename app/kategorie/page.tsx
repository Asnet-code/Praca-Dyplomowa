export const revalidate = 0;

import getProducts, { IProductParams } from "@/actions/getProducts";
import NullData from "../components/inputs/NullData";
import Container from "../components/Container";
import ProductCard from "../components/product/ProductCard";

interface HomeProps {
  searchParams: IProductParams;
}

export default async function Kategorie({ searchParams }: HomeProps) {
  const products = await getProducts(searchParams);

  if (products.length === 0) {
    return <NullData title="W sklepie nie ma produktów w takiej kategorii." />;
  }

  const sortedProductsdesc = products
    .slice()
    .sort((a: any, b: any) => a.price - b.price);

  return (
    <div>
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl-grid-cols-5 2xl:grid-cols-6 gap-8">
          {sortedProductsdesc.map((product: any) => {
            return <ProductCard data={product} key={product.id} />;
          })}
        </div>
      </Container>
    </div>
  );
}
