import { createReducer, on } from '@ngrx/store';

import { addProductSuccess } from './cart.actions';
import { removeProductSuccess } from './cart.actions';
import { getCartSuccess } from './cart.actions';

export const initialState: any[] = [];

export const cartReducer = createReducer(
  initialState,
  on(addProductSuccess, (_, action) => action.cart),
  on(removeProductSuccess, (_, action) => action.cart),
  on(getCartSuccess, (_, action) => action.cart)
);
