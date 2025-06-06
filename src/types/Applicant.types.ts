
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

export type Review = {
  _id: string;
  title: string;
  description: string;
  image: string[]
  date: Date;
}


export interface UserType {
  fName: string;
  lName: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  country: string;
}

export interface JobType {
  title: string;
  description: string;
  summary: string;
  date: string;
  delete: any;
  view: any;
  _id: string;
}

export type BlogTypes = {
  title: string;
  brief: string;
  body: string;
  image: string;
  views: any[];
  reaction: any[];
  _id: string;
  date: string;
}
