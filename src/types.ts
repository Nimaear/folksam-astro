export type Product = {
  title: string;
  description: string;
  price: number;
  id: number;
  images: string[];
  category: {
    id: number;
    name: string;
    image: string;
  }
};
