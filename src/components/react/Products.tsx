import { useStore } from "@nanostores/react";
import { products } from "../../store/products";
import { Producs } from "./Product";

export const Products = () => {
  const allProducts = useStore(products);

  return (
    <>
      {allProducts.map((product) => (<Producs key={product.id} product={product} />))}
    </>
  )
}
