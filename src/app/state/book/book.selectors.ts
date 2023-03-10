import { createFeatureSelector, createSelector } from '@ngrx/store'
import * as fromBooks from '../book/book.reducer'
import { BookState } from '../book/book.reducer';

export const selectBookState= createFeatureSelector<fromBooks.BookState>('bookState');

export const selectBooks= createSelector(
    selectBookState,
    fromBooks.selectAll
)

export const selectBookLoading = createSelector(
    selectBookState,
    state => state.loading
  );

  export const selectBookError = createSelector(
    selectBookState,
    state => state.error
  );

  export const selectBookEntities=createSelector(
    selectBookState,
    fromBooks.selectEntities
  )

  export const selectCurrentBookId= createSelector(
    selectBookState,
    fromBooks.getSelectedBookId
  )

  export const selectCurrentBook=createSelector(
    selectBookEntities,
    selectCurrentBookId,
    (bookEntities,bookId)=>bookId && bookEntities[bookId]
  )
  