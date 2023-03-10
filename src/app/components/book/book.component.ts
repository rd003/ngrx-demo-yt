import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book.model';
import { BookState } from 'src/app/state/book/book.reducer';
import * as bookSelector from '../../state/book/book.selectors';
import * as bookActions from '../../state/book/book.actions';

@Component({
  selector: 'app-book',
  template: `
    <ng-container *ngIf="loading$|async as loading">
      <div class="spinner-border text-warning d-block my-4" role="status">
         <span class="visually-hidden">Loading...</span>
      </div>
    </ng-container>

    <ng-container *ngIf="error$|async as error">
       <p>
         Error has occured
       </p> 
    </ng-container>

    <ng-container *ngIf="currentBook$|async as currentBook">
     <!-- call select-book component here -->
     <app-selected-book [book]="currentBook"></app-selected-book>
    </ng-container>
   

    
   <button class="btn btn-primary my-3" (click)="onAddBook()">Add more 📕</button>
   
   <ng-container *ngIf="books$|async as books">
     <!-- call select-book component here -->
      <app-book-list 
       [books]="books"
       (selectBook)="onBookSelect($event)" 
       (updateBook)="onBookUpdate($event)"
       (removeBook)="onBookRemove($event)">
      </app-book-list>
   </ng-container>
  `,
  styles: [
  ]
})
export class BookComponent implements OnInit {
  books$!: Observable<Book[]>;
  loading$!:Observable<boolean>;
  error$!:Observable<any>;
  currentBook$ = this.store.pipe(select(bookSelector.selectCurrentBook));

  onBookSelect(id:string){
    this.store.dispatch(bookActions.selectBook({id}))
  }

  onAddBook(){
    //generating random string from current date
    const rnd= Date.now().toString();

    //generating random number between 100 and 500
    const max=500;
    const min=100;
    const randomPrice=Math.floor(Math.random()*(max-min+1)+min);

    // creating a dummy book object
    const book:Book={id:rnd,
    title:'Book '+rnd,
    price:randomPrice
   }

   // dispatching addBook action with dummy book data
   this.store.dispatch(bookActions.addBook({book}))
  }

  onBookRemove(id:string){
    this.store.dispatch(bookActions.deleteBook({id}))
  }

  onBookUpdate(bookId:string){
    const input = window.prompt('Enter title, price (eg. book1,100)');
    if(input){
    const values= input.split(",");
     if(values.length==2 ){
         const book:Book={
                            id:bookId,
                            title:values[0],
                            price:parseInt(values[1])
                         };
        this.store.dispatch(bookActions.updateBook({book}));
      }
    }
    
  }

  ngOnInit(): void {
   this.books$=this.store.select(bookSelector.selectBooks);
   this.loading$=this.store.select(bookSelector.selectBookLoading);
   this.error$=this.store.select(bookSelector.selectBookError);
   this.store.dispatch(bookActions.loadBooks());

   
  }

  constructor(private store:Store<{books:BookState}>){

  }

}
