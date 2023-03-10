import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl='/api/books'
  
  getBooks(){
    return this.http.get<Book[]>(this.baseUrl).pipe(delay(400));
  }


  addBook(book:Book){
    return this.http.post<Book>(this.baseUrl,book)
  }

  updateBook(book:Book){
    const url=`${this.baseUrl}/${book.id}`;
    return this.http.put(url,book)
  }

 
  deleteBook(id:string){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  
  
  constructor(private http:HttpClient) { }
}
