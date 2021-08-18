import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartId: string = window.localStorage.getItem('ngShopifyCartId') || '';
  items: string[] = [];

  constructor(private http: HttpClient) {}

  addToCart(productInfo: {
    cartId: string;
    itemId: string;
    quantity: number;
  }): Observable<any> {
    const addToCartResponse = this.http.post(
      '/.netlify/functions/add-to-cart',
      {
        cartId: productInfo.cartId,
        itemId: productInfo.itemId,
        quantity: productInfo.quantity,
      }
    );
    return addToCartResponse;
  }

  removeFromCart(action: any) {
    const shopifyRemoveCartResponse = this.http.post(
      '/.netlify/functions/remove-from-cart',
      {
        cartId: this.cartId,
        lineId: action.lineId,
      }
    );
    return shopifyRemoveCartResponse;
  }

  getCart() {
    const shopifyGetCartResponse = this.http.post<any>(
      '/.netlify/functions/get-cart',
      {
        cartId: this.cartId,
      }
    );
    return shopifyGetCartResponse;
  }
}
