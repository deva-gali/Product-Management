import { Injectable } from '@angular/core';
import { IProduct } from '../IProduct';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Console } from '@angular/core/src/console';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ProductService {
 constructor(private _http: HttpClient) {
}
 productsApiUrl = 'http://localhost:54616/api/Products';
 productApiUrl = 'http://localhost:54616/api/Products/';
    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this.productsApiUrl)
        .do(data => console.log(JSON.stringify(data)))
        .catch(this.handleError);
    }

    getProduct(id: string): Observable<IProduct> {
        return this._http.get<IProduct>(this.productApiUrl + id)
        .do(data => console.log(JSON.stringify(data)))
        .catch(this.handleError);
    }

   private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}
