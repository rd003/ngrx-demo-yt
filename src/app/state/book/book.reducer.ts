import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Book } from 'src/app/models/book.model';
import * as BookActions from '../book/book.actions';

export interface BookState extends EntityState<Book>{
    selectedBookId:string|null,
    loading:boolean,
    error:any
}

export const bookAdapter=createEntityAdapter<Book>();

export const initialBookState:BookState=bookAdapter.getInitialState({
    selectedBookId:null,
    loading:false,
    error:null
});

export const bookReducer=createReducer(
  initialBookState,
  on(BookActions.selectBook,(state,{id})=>(
    {...state,selectedBookId:id}
  )),
  on(BookActions.loadBooks,(state)=>(
    {
        ...state,
        loading:true
    }
    )),
  on(BookActions.loadbooksSucces,(state,{books})=>
     bookAdapter.setAll(books,{...state,loading:false})
  ),
  on(BookActions.loadBooksFailure,(state,{error})=>
     ({...state,error,loading:false})
  ),
  on(BookActions.addBook,(state,{book})=>
    ({...state,loading:true})
  ),
  on(BookActions.addBookSuccess,(state,{book})=>(
     bookAdapter.addOne(book,{...state,loading:false})
  )),
  on(BookActions.addBookFailure,(state,{error})=>(
    {...state,error,loading:false}
  )),
  on(BookActions.updateBook,(state,{book})=>
  ({...state,loading:true})
  ),
  on(BookActions.updateBookSuccess,(state,{book})=>
  bookAdapter.updateOne({id:book.id,changes:book},{...state,loading:false})
  ),
  on(BookActions.updateBookFailure,(state,{error})=>
   ({...state,error,loading:false})
  ),
  on(BookActions.deleteBook,(state,{id})=>
  ({...state,loading:true})
  ),
  on(BookActions.deleteBookSuccess,(state,{id})=>
  bookAdapter.removeOne(id,{...state,loading:false})
  ),
  on(BookActions.deleteBookFailure,(state,{error})=>
   ({...state,error,loading:false})
  )
);
export const getSelectedBookId= (state:BookState)=>state.selectedBookId;
export const {selectAll,selectEntities,selectIds} = bookAdapter.getSelectors();