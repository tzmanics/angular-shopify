import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Product } from '../models/Product';
import { loadProductList } from '../state/product-list.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList$: Observable<Product[]> = this.store.select(
    (state) => state.productList
  );

  constructor(private store: Store<{ productList: Product[] }>) {}

  ngOnInit(): void {
    this.store.dispatch(loadProductList());
  }
}
