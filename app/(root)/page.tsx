"use client"

import { useProductQuery } from "@/lib/queries/useProductsQuery";

export default function Home() {
  const products = useProductQuery();

  console.log(products.data);


  return (
    <div className="">
    </div>
  );
}
