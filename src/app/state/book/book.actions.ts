import { createAction, props } from "@ngrx/store";
import { Book } from "src/app/models/book.model";

export const loadBooks = createAction('[Book/API] Load Books');
export const loadbooksSucces= createAction('[Book/API] Load Books Success',props<{ books: Book[] }>());
export const loadBooksFailure= createAction('[Book/API] Load Books Failure',props<{ error:any }>());

export const addBook = createAction('[Book/API] Add Book',props<{ book: Book }>());
export const addBookSuccess = createAction('[Book/API] Add Book Success', props<{ book: Book }>());
export const addBookFailure = createAction('[Book/API] Add Book Failure', props<{ error:any }>());

export const updateBook = createAction('[Book/API] Update Book',props<{ book: Book }>());
export const updateBookSuccess = createAction('[Book/API] Update Book Success', props<{ book: Book }>());
export const updateBookFailure = createAction('[Book/API] Update Book Failure', props<{ error:any }>());

export const deleteBook = createAction('[Book/API] Delete Book',props<{ id: string }>());
export const deleteBookSuccess = createAction('[Book/API] Delete Book Success', props<{ id: string }>());
export const deleteBookFailure = createAction('[Book/API] Delete Book Failure', props<{ error:any }>());

export const selectBook = createAction('[Book/API] Select Book',props<{ id: string }>());


