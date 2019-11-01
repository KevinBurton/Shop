import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Order } from '../../../models/order';
import * as orderActions from '../../state/order.actions';
import * as fromOrder from '../../state/order.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders$: Observable<Order[]>;
  error$: Observable<string>;

  constructor(private orderStore: Store<fromOrder.State>) { }

  ngOnInit() {
    this.orders$ = this.orderStore.pipe(select(fromOrder.getOrders));
    this.error$ = this.orderStore.pipe(select(fromOrder.getError));

    this.orderStore.dispatch(new orderActions.LoadOrders());
  }
}
