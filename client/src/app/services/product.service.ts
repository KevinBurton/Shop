import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, ObservableInput, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { Product } from '../models/product';

import { EnvService } from '../services/env.service';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private http: HttpClient,
                private env: EnvService) {

    }
    public getProducts(): Observable<Product[]> {
        const url = `${this.env.apiBase}/api/products/`;
        return this.http.get<Product[]>(url).pipe(
            tap((data) => console.log(`Product List: ${data.length}`)),
            catchError(this.handleError)
        );
    }
    public getProductById(id: string): Observable<Product> {
      const url = `${this.env.apiBase}/api/products/${id}`;
      return this.http.get<Product>(url).pipe(
          tap((data) => {
            console.log(`Product: ${data}`);
          }),
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
