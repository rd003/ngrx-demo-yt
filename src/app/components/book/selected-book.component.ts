import { Component, Input } from "@angular/core";
import { Book } from "src/app/models/book.model";

@Component({
    selector:"app-selected-book",
    template:`
     <div class="card my-2" style="width: 18rem;">
        <div class="card-header">
            Selected Book
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Title: {{book.title}}</li>
          <li class="list-group-item">Price: {{book.price}}</li>
        </ul>
      </div>`
})

export class SelectedBookComponent
{
    @Input() book!:Book;
   
}