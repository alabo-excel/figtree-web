
export interface ProductType {
  count: any;
  _id: string;
  title: string;
  description: string;
  price: number;
  image: string[];
  category: string;
  quantity: number;
  weight: number;
  date: string;
}

export type Saved = {
  _id: string;
  author: string;
  product: ProductType;
  date: Date;
}