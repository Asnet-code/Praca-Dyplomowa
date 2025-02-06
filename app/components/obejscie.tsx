"use client";
import React, { useState } from "react";
import Container from "./Container";
import Button from "./inputs/Button";
import ProductCard from "./product/ProductCard";
import { RiSortAsc } from "react-icons/ri";

interface ObejscieProps {
  products: any[]; // Typ twoich produktów, zastąp 'any' odpowiednim typem
}

const Obejscie: React.FC<ObejscieProps> = ({ products }) => {
  const [sortedProducts, setSortedProducts] = useState([...products]);

  const sortProducts = (order: "asc" | "desc") => {
    const sorted = [...products].sort((a: any, b: any) => {
      if (order === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setSortedProducts(sorted);
  };

  return (
    <div>
      <div className="w-full flex justify-center pt-5">
        <div className="flex gap-5 w-[450px] p-4">
          <Button
            outline
            label="Sortuj malejąco"
            onClick={() => sortProducts("desc")}
          />
          <Button
            outline
            label="Sortuj rosnąco"
            onClick={() => sortProducts("asc")}
          />
        </div>
      </div>

      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl-grid-cols-5 2xl:grid-cols-6 gap-8">
          {sortedProducts.map((product: any) => {
            if (product.productCategory === "Komputery") {
              return null;
            }
            return <ProductCard data={product} key={product.id} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default Obejscie;
