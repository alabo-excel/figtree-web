
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
  date: Date;
}

export type Saved = {
  _id: string;
  author: string;
  product: ProductType;
  date: Date;
}