import { createFeatureSelector, createSelector } from '@ngrx/store';

import { TaxPipe } from 'src/app/pipes/tax.pipe';
import { Cart } from 'src/app/models/cart';
import * as fromRoot from '../../state/app.state';
import { CartActions, CartActionTypes } from './cart.actions';

export interface CartState {
  list: Cart;
  cost: number;
  tax: number;
}

export interface State extends fromRoot.State {
  cart: CartState;
}

const getCartFeatureState = createFeatureSelector<CartState>('cart');
export const getCartList = createSelector(
  getCartFeatureState,
  state => state.list
);
export const getCartCost = createSelector(
  getCartFeatureState,
  state => state.cost
);
export const getCartTax = createSelector(
  getCartFeatureState,
  state => state.tax
);

const initialState: CartState = {
  list: [],
  cost: 0,
  tax: 0
};

export function calculateTotals(cartList: Cart): CartState  {
  if (cartList && cartList.length > 0) {
    const pipe: TaxPipe = new TaxPipe();
    let totalCost = 0;
    let totalTax = 0;
    cartList.forEach((cart) => {
        totalTax += pipe.transform(cart.quantity * cart.product.price.base,
                                        cart.product.price.tax,
                                        cart.product.price.duty);
        totalCost += (cart.quantity * cart.product.price.base);
    });
    totalCost += totalTax;
    return {
      list: cartList,
      cost: totalCost,
      tax: totalTax
    };
  }
  return {
    list: cartList,
    cost: 0,
    tax: 0
  };
}
export function cartReducer(state = initialState, action: CartActions): CartState {
  let ret;
  switch (action.type) {
    case CartActionTypes.SetCart:
      ret = calculateTotals(action.payload);
      return {
        ...state,
        list: ret.list,
        cost: ret.cost,
        tax: ret.tax
      };
      case CartActionTypes.ClearCart:
        return {
          ...state,
          list: [],
          cost: 0,
          tax: 0
        };
      case CartActionTypes.AddToCart:
      const cartList: Cart = [...(state && state.list ? state.list : [])];
      cartList.push(action.payload);
      ret = calculateTotals(cartList);
      return {
        ...state,
        list: ret.list,
        cost: ret.cost,
        tax: ret.tax
      };
    default:
      return state;
  }
}
