import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { Product } from '../models/Product';
import { ProductListService } from '../services/product-list.service';
import { addProduct } from '../state/cart.actions';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product!: Product;
  selectedProductId!: string;
  selectedQuantity: number = 1;
  variants: any[] = [{ node: { priceV2: { amount: 0 } } }];

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductListService,
    private store: Store<{ cart: any[] }>
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const handle = this.route.snapshot.paramMap.get('handle') || '';
    this.productsService.getProduct(handle).subscribe((product) => {
      this.product = product;
      this.selectedProductId = this.product.variants.edges[0].node.id;
      this.variants = product.variants.edges;
    });
  }

  addToCart(productInfo: any) {
    productInfo.cartId = window.localStorage.getItem('ngShopifyCartId') || '';
    this.store.dispatch(addProduct(productInfo));
    alert('Successfully added to cart 👍');
  }
}
