import { useStore } from "@nanostores/react";
import { productsStore } from "../../store/products";
import { Producs } from "./Product";

export const Products = () => {
  const allProducts = useStore(productsStore);

  return (
    <>
      {allProducts.map((product) => (<Producs key={product.id} product={product} />))}
    </>
  )
}
