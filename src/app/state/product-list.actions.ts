import { createAction, props } from '@ngrx/store';

export const loadProductList = createAction(
  '[Product List Page] Load Product List'
);

export const loadProductListSuccess = createAction(
  '[Product List Page | API] Load Product List Success',
  props<{ productList: any[] }>()
);
