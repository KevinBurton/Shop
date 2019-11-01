import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { orderReducer } from './state/order.reducer';

import { OrderComponent } from './containers/order/order.component';
import { EffectsModule } from '@ngrx/effects';
import { OrderEffects } from './state/order.effects';
import { OrderListComponent } from './components/order-list/order-list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
        { path: 'orders', component: OrderComponent }    ]),
    SharedModule,
    StoreModule.forFeature('order', orderReducer),
    EffectsModule.forFeature(
      [ OrderEffects ]
    ),
  ],
  declarations: [
    OrderComponent,
    OrderListComponent
  ]
})
export class OrderModule { }
