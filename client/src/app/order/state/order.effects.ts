import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { OrderService } from '../../services/order.service';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as orderActions from './order.actions';

@Injectable()
export class OrderEffects {

  constructor(private orderService: OrderService,
              private actions$: Actions) { }

  @Effect()
  loadOrders$: Observable<Action> = this.actions$.pipe(
    ofType(orderActions.OrderActionTypes.LoadOrders),
    mergeMap(action =>
      this.orderService.getOrders().pipe(
        map(orders => (new orderActions.LoadOrdersSuccess(orders))),
        catchError(err => of(new orderActions.LoadOrdersFail(err)))
      )
    )
  );

}
