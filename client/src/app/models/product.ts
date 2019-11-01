export interface Price {
  base: number;
  tax: number;
  duty: number;
}

export interface Product {
  _id: string;
  name: string;
  type: string[];
  description: string;
  price: Price;
  related: string[];
}
