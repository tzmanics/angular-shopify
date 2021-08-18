import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { Product } from '../models/Product';

export const selectProduct = createSelector(
  (state: AppState) => state.productList,
  (productList: Array<Product>) => productList
);
