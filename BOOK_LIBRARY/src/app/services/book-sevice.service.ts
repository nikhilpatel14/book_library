import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookSeviceService {
  ActiveUserId=0;

  setActiveUserId(id: number){
    this.ActiveUserId=id
    console.log("idactiabaedD",this.ActiveUserId);
    
  }

  constructor(private http:HttpClient) { }


  getBookList(){
    return this.http.get("http://localhost:3000/books")  
  }

  getActiveUser(){
    return this.ActiveUserId;
  }

  getUsers(){
    return this.http.get("http://localhost:3000/users")
  }


}
