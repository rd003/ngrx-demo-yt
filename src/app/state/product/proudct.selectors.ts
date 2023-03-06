import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "src/app/models/product.mode";

export const productState = createFeatureSelector<ReadonlyArray<Product>>("products");

// export const prouductSelector= createSelector(productState);