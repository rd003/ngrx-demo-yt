import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/models/product.mode';
import * as ProductActions from '../product/product.actions';

export const initialState:ReadonlyArray<Product> = [];
export const productReducer= createReducer(
    initialState,
  on(ProductActions.addProduct,(state,{product})=>(
     [...state,product]
  )),
  on(ProductActions.removeProduct,(state,{id})=>(
    state.filter(product=>product.id!==id)
  ))
);