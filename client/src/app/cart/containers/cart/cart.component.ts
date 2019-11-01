import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../..//services/order.service';

import { Order } from '../../../models/order';
import { Store, select } from '@ngrx/store';
import { User } from '../../../models/user';
import * as fromUser from '../../../user/state/user.reducer';
import * as fromCart from '../../../cart/state/cart.reducer';
import * as cartActions from '../../../cart/state/cart.actions';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/models/cart';

@Component({
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private orderService: OrderService,
              private router: Router,
              private userStore: Store<fromUser.State>,
              private cartStore: Store<fromCart.State>) { }

  cartList$: Observable<Cart>;
  cost$: Observable<number>;
  tax$: Observable<number>;
  currentUser$: Observable<User>;

  orderMessage = '';
  errorMessage = '';

  ngOnInit() {
    // TODO: Unsubscribe
    this.cartList$ = this.cartStore.pipe(select(fromCart.getCartList));
    this.currentUser$ = this.userStore.pipe(select(fromUser.getCurrentUser));
  }

  placeOrder(order: Order): void {
    // Now the order is clean
    this.orderService.PlaceOrder(order).toPromise()
    .then((loc) => {
      this.orderMessage = loc;
      this.cartStore.dispatch(new cartActions.ClearCart());
      this.router.navigate(['/orders']);
    })
    .catch((err) => this.errorMessage = err);
  }
}
