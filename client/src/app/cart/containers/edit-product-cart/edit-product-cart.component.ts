import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../../../services/product.service';
import { ProductOrder } from '../../../models/order';
import { FormBuilder,
         FormGroup,
         Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromCart from '../../../cart/state/cart.reducer';
import * as cartActions from '../../../cart/state/cart.actions';
import { Product } from 'src/app/models/product';

@Component({
  templateUrl: './edit-product-cart.component.html',
  styleUrls: ['./edit-product-cart.component.css']
})
export class EditProductCartComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private processor: ProductService,
              private router: Router,
              private fb: FormBuilder,
              private store: Store<fromCart.State>) { }


  productCartForm: FormGroup;
  errorMessage = '';
  productOrder: ProductOrder = {} as ProductOrder;

  ngOnInit(): void {
    this.productCartForm = this.fb.group({
      quantity: [1, [Validators.required, Validators.min(1)]]
    });
    const productId: string = this.route.snapshot.paramMap.get('id');
    this.getProduct(productId);
  }
  submitted(quantity: number) {
    if (true) {
      this.productOrder.quantity = quantity;
      this.store.dispatch(new cartActions.AddToCart(this.productOrder));
      this.router.navigate(['/cart']);
    } else {
      this.router.navigateByUrl('/home');
    }
  }
  getProduct(id: string): void {
    this.processor.getProductById(id).toPromise()
        .then((loc) => {
                this.productOrder.product = {...loc};
                this.productOrder.product.type = [...loc.type];
                this.productOrder.product.related = [...loc.related];
                this.productOrder.quantity = 0;
        })
        .catch((err) => this.errorMessage = err);
  }

}
