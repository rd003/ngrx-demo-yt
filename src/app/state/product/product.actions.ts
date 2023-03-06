import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/models/product.mode";

export const addProduct = createAction('[Product Component] Product',props<{product:Product}>());
export const removeProduct = createAction('[Product Component] Remove Product',props<{id:string}>());