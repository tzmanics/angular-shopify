import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  constructor(private http: HttpClient) {}

  getProductList(): Observable<Product[]> {
    return this.http.post<Product[]>(
      '/.netlify/functions/get-product-list',
      {}
    );
  }

  getProduct(handle: string): Observable<Product> {
    const product = this.http.post<Product>('/.netlify/functions/get-product', {
      itemHandle: handle,
    });
    return product;
  }
}
