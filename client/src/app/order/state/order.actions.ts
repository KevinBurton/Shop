import { Action } from '@ngrx/store';
import { Order } from '../../models/order';

export enum OrderActionTypes {
    LoadOrders = '[Order] Initiate load of Orders from DB',
    LoadOrdersSuccess = '[Order] Successfull load of orders',
    LoadOrdersFail = '[Order] Load products feiled'
}

export class LoadOrders implements Action {
  readonly type = OrderActionTypes.LoadOrders;
}

export class LoadOrdersSuccess implements Action {
  readonly type = OrderActionTypes.LoadOrdersSuccess;
  constructor(public payload: Order[]) {}
}
export class LoadOrdersFail implements Action {
  readonly type = OrderActionTypes.LoadOrdersFail;
  constructor(public payload: string) {}
}

export type OrderActions = LoadOrders |
                           LoadOrdersSuccess |
                           LoadOrdersFail;
