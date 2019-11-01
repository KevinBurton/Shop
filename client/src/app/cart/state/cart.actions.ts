import { Action } from '@ngrx/store';
import { Cart } from 'src/app/models/cart';
import { ProductOrder } from '../../models/order';

export enum CartActionTypes {
    SetCart = '[Cart] Set the cart list',
    ClearCart = '[Cart] Set the cart list to an empty array',
    AddToCart = '[Cart] Add a product to the cart list'
}

export class SetCart implements Action {
    readonly type = CartActionTypes.SetCart;
    constructor(public payload: Cart) {}
}

export class ClearCart implements Action {
    readonly type = CartActionTypes.ClearCart;
}

export class AddToCart implements Action {
    readonly type = CartActionTypes.AddToCart;
    constructor(public payload: ProductOrder) {}
}

export type CartActions = SetCart |
                          ClearCart |
                          AddToCart;
