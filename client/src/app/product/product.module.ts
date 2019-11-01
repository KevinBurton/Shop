import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './state/product.effects';

import { productReducer } from './state/product.reducer';

import { ProductComponent } from './containers/product/product.component';

import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: 'products', component: ProductComponent}
    ]),
    StoreModule.forFeature('product', productReducer),
    EffectsModule.forFeature(
      [ ProductEffects ]
    ),
  ],
  declarations: [
    ProductComponent,
    ProductListComponent
  ]
})
export class ProductModule { }
