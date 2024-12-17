import type { Product } from "./types";

declare global {

  interface Window {
    __INITIAL_DATA__: Product[];
  }
}
