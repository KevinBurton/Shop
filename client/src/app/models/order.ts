import { Product } from './product';
import { User } from './user';

export interface ProductOrder {
  product: Product;
  quantity: number;
}

export interface Order {
   user: User;
   orderList: ProductOrder[];
   date: Date;
   totalCost: number;
   totalTax: number;
}
