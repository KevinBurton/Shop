import { Component, OnInit } from '@angular/core';
import { ProductOrder } from '../../../models/order';
import { Store, select } from '@ngrx/store';
import { User } from '../../../models/user';
import { Router } from '@angular/router';
import * as fromUser from '../../../user/state/user.reducer';
import * as fromCart from '../../../cart/state/cart.reducer';
import * as userActions from '../../../user/state/user.actions';
import * as cartActions from '../../../cart/state/cart.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  cartList$: Observable<ProductOrder[]>;
  currentUser$: Observable<User>;
  error$: Observable<string>;

  constructor(private router: Router,
              private userStore: Store<fromUser.State>,
              private cartStore: Store<fromCart.State>) { }

  ngOnInit(): void {
    this.cartList$ = this.cartStore.pipe(select(fromCart.getCartList));
    this.currentUser$ = this.userStore.pipe(select(fromUser.getCurrentUser));
    this.error$ = this.userStore.pipe(select(fromUser.getError));
  }
  logout() {
    this.cartStore.dispatch(new cartActions.ClearCart());
    this.userStore.dispatch(new userActions.ClearCurrentUser());
    this.router.navigateByUrl('/home');
  }
}
