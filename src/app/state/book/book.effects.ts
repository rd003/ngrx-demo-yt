
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
import * as bookActions from '../book/book.actions'

@Injectable()
export class BookEffects{
    addUser$= createEffect(()=>{
        return this.actions$.pipe(
            ofType(bookActions.addBook),
            switchMap(payload=>
                this.bookService.addBook(payload.book).pipe(
                    map(data=>bookActions.addBookSuccess({book:payload.book})),
                    catchError(error=>of(bookActions.addBookFailure({error})))
                )
                )
        )
    })

     updateUser$= createEffect(
        ()=>{
            return this.actions$.pipe(
                ofType(bookActions.updateBook),
                switchMap(payload=>
                    this.bookService.updateBook(payload.book).pipe(
                        map(
                            _=>bookActions.updateBookSuccess({book:payload.book})
                            ),
                       catchError(
                        error=>of(bookActions.updateBookFailure({error}))
                       )
                    )
                    
                    )
            )
        }
     )

     deleteBook$=createEffect(()=>{
        return this.actions$.pipe(
            ofType(bookActions.deleteBook),
            switchMap(
                payload=> 
                this.bookService.deleteBook(payload.id)
                    .pipe(
                        map(()=>bookActions.deleteBookSuccess({id:payload.id})),
                        catchError(error=>of(bookActions.deleteBookFailure({error})))
                    )
            )
        )
     })

    loadBooks$= createEffect(()=>{
        return this.actions$.pipe(
            ofType(bookActions.loadBooks),
            switchMap(
                _=>
                this.bookService.getBooks().pipe(
                    map(books=>bookActions.loadbooksSucces({books})),
                    catchError(error=>of(bookActions.loadBooksFailure({error})))
                )
            )
        )
    })
    

    constructor(private actions$:Actions,private bookService:BookService){

    }
}