import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Book } from "src/app/models/book.model";

@Component({
    selector:"app-book-list",
    template:`
    <h2>Books 📚</h2>

    <div class="my-1">
      <table class="table table-striped">
        <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
        </thead>
        <tbody>
        <tr *ngFor="let book of books">
              <td>{{book.id}}</td>
              <td>{{book.title}}</td>
              <td>{{book.price}}</td>
              <td>
               <button class="btn btn-primary mx-1" (click)="selectBook.emit(book.id)">Select</button>
               <button class="btn btn-secondary mx-1" (click)="updateBook.emit(book.id)">Update</button>
                <button class="btn btn-danger mx-1" (click)="removeBook.emit(book.id)">Remove</button>
             
            </td> 
            </tr>
        </tbody>
      </table>
    </div>
     `
})

export class BookListComponent
{
    @Input() books!:Book[];
    @Output() selectBook = new EventEmitter<string>();
    @Output() updateBook = new EventEmitter<string>();
    @Output() removeBook = new EventEmitter<string>();

}