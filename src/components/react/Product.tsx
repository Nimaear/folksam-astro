import * as stylex from "@stylexjs/stylex";
import { card } from "../../components/Product/Product.stylex";
import type { Product } from "../../types";



export const Producs: React.FC<{
  product: Product;
}> = ({ product }) => (


  <a href={`/product/${product.id}`} {...stylex.props(card.root)}>
    <img src={product.category.image} alt={product.title} />
    <div {...stylex.props(card.content)}>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.price} SEK</p>
    </div>
  </a>
);
