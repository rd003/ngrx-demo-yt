import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from 'src/app/state/counter/counter.reducer';
import { CounterComponent } from './components/counter/counter.component';
import { TopNavComponent } from './components/layouts/top-nav/top-nav.component';
import { ProductComponent } from './components/product/product.component';
import { productReducer } from './state/product/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UsersComponent } from './components/users/users.component';
import {HttpClientModule} from '@angular/common/http'
import { userReducer } from './state/user/user.reducer';
import { UserEffects } from './state/user/user.effects';
import { BookComponent } from './components/book/book.component';
import { SelectedBookComponent } from './components/book/selected-book.component';
import { BookListComponent } from './components/book/book-list.component';
import { bookReducer } from './state/book/book.reducer';
import { BookEffects } from './state/book/book.effects';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    TopNavComponent,
    ProductComponent,
    UsersComponent,
    BookComponent,SelectedBookComponent,BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      counter:counterReducer,
      products:productReducer,
      userState:userReducer,
      bookState:bookReducer
    }),
    EffectsModule.forRoot([UserEffects,BookEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
