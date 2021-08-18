import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { removeProduct } from '../state/cart.actions';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css'],
})
export class CartTableComponent implements OnInit {
  @Input() cartItems: any[] = [];

  constructor(private store: Store<{ cart: any[] }>) {}

  ngOnInit(): void {}

  removeFromCart(lineId: any) {
    this.store.dispatch(removeProduct({ lineId }));
  }
}
