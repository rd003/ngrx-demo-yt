import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product.mode';
import { productState } from 'src/app/state/product/proudct.selectors';
import * as ProductActions from '../../state/product/product.actions'

@Component({
  selector: 'app-product',
  template: `
   <button class="btn btn-primary my-3" (click)="addProduct()">Add</button>
   <ng-container *ngIf="products$|async as products">
    <div class="py-3">
      <table class="table table-striped">
        <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
        </thead>
        <tbody>
        <tr *ngFor="let product of products">
              <td>{{product.id}}</td>
              <td>{{product.name}}</td>
              <td>{{product.price}}</td>
              <td>
                <button class="btn btn-danger" (click)="removeProduct(product.id)">Remove</button>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
   </ng-container>
  `,
  styles: [
  ]
})
export class ProductComponent {
  products$= this.store.select(productState);

  addProduct(){
    const rnd= Date.now().toString();

     const product:Product={id:rnd,
     name:'product '+rnd,
     price:100
    }
    this.store.dispatch(ProductActions.addProduct({product}))

  }

  removeProduct(id:string){
    this.store.dispatch(ProductActions.removeProduct({id}))

  }

 constructor(private store:Store<{products:ReadonlyArray<Product>}>){
 }
}
