import { Component, Input, Output, EventEmitter } from '@angular/core';
import { cloneDeep } from 'lodash';
import { Cart } from 'src/app/models/cart';
import { Order } from 'src/app/models/order';
import { User } from 'src/app/models/user';
import { CartState, calculateTotals } from 'src/app/cart/state/cart.reducer';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})

export class CartListComponent {
  @Input() cartList: Cart;
  @Input() currentUser: User;

  @Output() placeOrder = new EventEmitter<Order>();

  placeOrderNotification(): void {
    const ret: CartState = calculateTotals(this.cartList);
    const order: Order = {
      date: new Date(),
      totalCost: ret.cost,
      totalTax: ret.tax,
      user: cloneDeep(this.currentUser),
      orderList: cloneDeep(this.cartList),
    };
    this.placeOrder.emit(order);
  }
}

