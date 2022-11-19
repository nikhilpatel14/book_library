import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../user.model';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  register(user: { userName: AbstractControl | null; Password: AbstractControl | null; Email: AbstractControl | null; Phone: AbstractControl | null; UserType: string; WishList: any[]; Completed: any[]; }){
    const headers = { 'content-type': 'application/json'}   
    const body=JSON.stringify(user);
    this.http.post("http://localhost:3000/Users",body,{'headers':headers}).subscribe(()=>{
      console.log("user added succesfully");

      
    })  
  }

  getUser():Observable<any>{
    return this.http.get("http://localhost:3000/Users")
  }


  getUserById(id:number){
    return this.http.get("http://localhost:3000/Users/"+id)
  }
  
  deleteUser(id:number){
    return this.http.delete("http://localhost:3000/Users/"+id)

  }

  login:any
  setLogin(status:boolean){
    this.login=status

  }

  getLogin(){
    return this.login
  }



}
