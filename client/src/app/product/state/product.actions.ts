import { Action } from '@ngrx/store';
import { Product } from '../../models/product';

export enum ProductActionTypes {
    SetProducts = '[Product] Set the product list',
    LoadProducts = '[Product] Initiate load of products from DB',
    LoadProductsSuccess = '[Product] Successfull load of products',
    LoadProductsFail = '[Product] Load products feiled'
}

export class SetProducts implements Action {
    readonly type = ProductActionTypes.SetProducts;
    constructor(public payload: Product[]) {}
}

export class LoadProducts implements Action {
  readonly type = ProductActionTypes.LoadProducts;
}

export class LoadProductsSuccess implements Action {
  readonly type = ProductActionTypes.LoadProductsSuccess;
  constructor(public payload: Product[]) {}
}
export class LoadProductsFail implements Action {
  readonly type = ProductActionTypes.LoadProductsFail;
  constructor(public payload: string) {}
}

export type ProductActions = SetProducts |
                             LoadProducts |
                             LoadProductsSuccess |
                             LoadProductsFail;
