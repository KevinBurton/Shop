import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { ProductService } from '../../services/product.service';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as productActions from './product.actions';

@Injectable()
export class ProductEffects {

  constructor(private productService: ProductService,
              private actions$: Actions) { }

  @Effect()
  loadProducts$: Observable<Action> = this.actions$.pipe(
    ofType(productActions.ProductActionTypes.LoadProducts),
    mergeMap(action =>
      this.productService.getProducts().pipe(
        map(products => (new productActions.LoadProductsSuccess(products))),
        catchError(err => of(new productActions.LoadProductsFail(err)))
      )
    )
  );

}
