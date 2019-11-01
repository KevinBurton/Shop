import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { CartComponent } from './containers/cart/cart.component';
import { EditProductCartComponent } from './containers/edit-product-cart/edit-product-cart.component';

import { SharedModule } from '../shared/shared.module';

import { TaxPipe } from '../pipes/tax.pipe';
import { StoreModule } from '@ngrx/store';

import { cartReducer } from './state/cart.reducer';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { EditProductCartDisplayComponent } from './components/edit-product-cart-display/edit-product-cart-display.component';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: 'cart', component: CartComponent},
      {path: 'cart/:id/add', component: EditProductCartComponent}
    ]),
    StoreModule.forFeature('cart', cartReducer)
  ],
  declarations: [
    CartComponent,
    EditProductCartComponent,
    TaxPipe,
    CartListComponent,
    EditProductCartDisplayComponent
  ]
})
export class CartModule { }
