import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CounterActions from 'src/app/state/counter/counter.actions';

@Component({
  selector: 'app-counter',
  template: `
     <div class="my-3">
     {{counter$ | async}}
     </div>
     <div class="my-3">
       <button class="btn btn-primary" (click)="increment()">Increment</button>
       <button class="btn btn-danger" (click)="decrement()">Decrement</button>
       <button class="btn btn-secondary" (click)="reset()">
        Reset
       </button>
</div>
   

    
  `,
  styles: [
  ]
})
export class CounterComponent {

  counter$:Observable<number>= this.store.select('counter'); // selector

  increment(){
    this.store.dispatch(CounterActions.increment())
  }

  decrement(){
    this.store.dispatch(CounterActions.decrement())
  }

  reset(){
    this.store.dispatch(CounterActions.reset())
  }

  constructor(private store:Store<{counter:number}>){

  }
}
