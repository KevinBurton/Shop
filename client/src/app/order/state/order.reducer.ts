import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Order } from '../../models/order';
import { OrderActionTypes, OrderActions } from './order.actions';
import * as fromRoot from '../../state/app.state';

export interface OrderState {
    list: Order[];
    error: string;
}

export interface State extends fromRoot.State {
  order: OrderState;
}

const initialState: OrderState = {
    list: [],
    error: ''
};

const getOrderFeatureState = createFeatureSelector<OrderState>('order');

export const getOrders = createSelector(
    getOrderFeatureState,
    state => state.list
);

export const getError = createSelector(
  getOrderFeatureState,
  state => state.error
);

export function orderReducer(state = initialState, action: OrderActions): OrderState {
    switch (action.type) {
      case OrderActionTypes.LoadOrdersSuccess:
        return {
          ...state,
          list: action.payload,
          error: ''
        };
      case OrderActionTypes.LoadOrdersFail:
        return {
          ...state,
          list: [],
          error: action.payload
        };
        default:
        return state;
    }
}
