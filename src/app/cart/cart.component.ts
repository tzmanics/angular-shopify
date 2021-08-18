import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getCart } from '../state/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart$: Observable<any> = this.store.select((state) => state.cart);
  constructor(private store: Store<{ cart: any[] }>) {}

  ngOnInit(): void {
    this.store.dispatch(getCart());
  }
}
