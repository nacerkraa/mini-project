export interface Product {
  id: number;
  name: string;
  price: string;         // keep as string for flexibility: "25,000 DA"
  imageUrl: string;      // e.g. "assets/products/example-1.jpg"
  shortDesc: string;
  description: string;
}