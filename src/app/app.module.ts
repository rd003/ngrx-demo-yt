import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    TopNavComponent,
    ProductComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({counter:counterReducer,products:productReducer,userState:userReducer}),
    EffectsModule.forRoot([UserEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
