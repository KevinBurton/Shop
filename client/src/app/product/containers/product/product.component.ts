import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { Router } from '@angular/router';
import * as fromUser from '../../../user/state/user.reducer';
import * as fromProduct from '../../../product/state/product.reducer';
import { Store, select } from '@ngrx/store';
import { User } from '../../../models/user';
import { Observable, of } from 'rxjs';
import * as productActions from '../../../product/state/product.actions';

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products$: Observable<Product[]>;
  currentUser$: Observable<User>;
  error$: Observable<string>;

  constructor(private router: Router,
              private userStore: Store<fromUser.State>,
              private productStore: Store<fromProduct.ProductState>) { }

  errorMessage = '';

  ngOnInit() {
    this.products$ = this.productStore.pipe(select(fromProduct.getProducts));
    this.currentUser$ = this.userStore.pipe(select(fromUser.getCurrentUser));

    this.productStore.dispatch(new productActions.LoadProducts());
    this.error$ = this.productStore.pipe(select(fromProduct.getError));

  }
  addToCart(product: Product) {
    this.router.navigate(['/cart', product._id, 'add']);
  }

}
