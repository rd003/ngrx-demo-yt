import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl='/api/users'

  addUser(user:User){
    return this.http.post(this.baseUrl,user)
  }

  getUsers(){
    return this.http.get(this.baseUrl).pipe(delay(400));
  }

  deleteUser(id:number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  
  
  constructor(private http:HttpClient) { }
}
