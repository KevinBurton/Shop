import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from '../../models/product';
import { ProductActionTypes, ProductActions } from './product.actions';

export interface ProductState {
    list: Product[];
    error: string;
}

const initialState: ProductState = {
    list: [],
    error: ''
};

const getProductFeatureState = createFeatureSelector<ProductState>('product');

export const getProducts = createSelector(
    getProductFeatureState,
    state => state.list
);

export const getError = createSelector(
  getProductFeatureState,
  state => state.error
);

export function productReducer(state = initialState, action: ProductActions): ProductState {
    switch (action.type) {
      case ProductActionTypes.SetProducts:
        return {
          ...state,
          list: action.payload
        };
      case ProductActionTypes.LoadProductsSuccess:
        return {
          ...state,
          list: action.payload,
          error: ''
        };
      case ProductActionTypes.LoadProductsFail:
        return {
          ...state,
          list: [],
          error: action.payload
        };
      default:
        return state;
    }
}
