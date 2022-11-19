import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { BookSeviceService } from 'src/app/services/book-sevice.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/app/user.model';

@Component({
  selector: 'app-login-book',
  templateUrl: './login-book.component.html',
  styleUrls: ['./login-book.component.css']
})
export class LoginBookComponent implements OnInit {
  constructor(private userService:UserServiceService,private bookService:BookSeviceService,private http:HttpClient) { }
  @Input() book:any
  activeUserData:any
  usersArray:any
  userDetails:any
  addWishList(){
    
    const activeUserId=this.bookService.getActiveUser()
    this.userService.getUserById(activeUserId)
    .subscribe((user)=>{
      this.userDetails=user
      console.log("active user",activeUserId);
      const wishListArray=this.userDetails.WishList
      const currBookId=this.book.id

      if (wishListArray.includes(currBookId))
      alert("Book already present in wish List")

      else{
      
      this.userDetails.WishList.push(this.book.id)
      this.userService.deleteUser(activeUserId).subscribe()

       const headers = { 'content-type': 'application/json'}   
       const body=JSON.stringify(this.userDetails);
       alert("Book added SuccesFully")
      this.http.post("http://localhost:3000/Users",body,{'headers':headers}).subscribe(()=>{
      
       }) } 

    
    })
    

  }  
  addCompleted(){
    
    const activeUserId=this.bookService.getActiveUser()
    

    this.userService.getUserById(activeUserId)
    .subscribe((user)=>{
      this.userDetails=user
      console.log("active user",activeUserId);
    const completedBookArray=this.userDetails.Completed
    const currentBookId=this.book.id

    if(completedBookArray.includes(currentBookId))
    alert("Book already present in Completed List")

    else{
      
      this.userDetails.Completed.push(this.book.id)
      this.userService.deleteUser(activeUserId).subscribe()

       const headers = { 'content-type': 'application/json'}   
       const body=JSON.stringify(this.userDetails);
       alert("Book added SuccesFully")
      this.http.post("http://localhost:3000/Users",body,{'headers':headers}).subscribe(()=>{
            
       })  
      }
    
    })
    

  }



  ngOnInit(): void {
  }



}
