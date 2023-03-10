import { Component } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  template: `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Ngrx-Demo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" routerLinkActive="active" routerLink="/" aria-current="page" >Home</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link" routerLinkActive="active" routerLink="/counter" aria-current="page" >Counter</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" routerLinkActive="active" routerLink="/products" aria-current="page" >Products</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link" routerLinkActive="active" routerLink="/users" aria-current="page" >Users</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" routerLinkActive="active" routerLink="/books" aria-current="page" >Books</a>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
  `,
  styles: [
  ]
})
export class TopNavComponent {

}
