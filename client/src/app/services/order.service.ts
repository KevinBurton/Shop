import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, ObservableInput, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { Order } from '../models/order';
import { EnvService } from '../services/env.service';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    constructor(private http: HttpClient,
                private env: EnvService) {

    }
    public getOrders(): Observable<Order[]> {
        const url = `${this.env.apiBase}/api/orders`;
        return this.http.get<Order[]>(url).pipe(
            tap((data) => console.log(`Order List: ${data.length}`)),
            catchError(this.handleError)
        );
    }
    public PlaceOrder(order: Order): Observable<string> {
      const url = `${this.env.apiBase}/api/orders/add`;
      return this.http.post<string>(url, order).pipe(
          tap((data) => console.log(`Place order: ${data}`)),
          catchError(this.handleError)
      );
  }
  private handleError(err: HttpErrorResponse): ObservableInput<any> {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code ${err.status}, error message is ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}
