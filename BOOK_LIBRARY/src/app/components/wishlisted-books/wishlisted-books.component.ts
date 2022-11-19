import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book.model';
import { BookSeviceService } from 'src/app/services/book-sevice.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-wishlisted-books',
  templateUrl: './wishlisted-books.component.html',
  styleUrls: ['./wishlisted-books.component.css']
})
export class WishlistedBooksComponent implements OnInit {

  wishListedBooks :Book[] = [];
  wishListedBooksArray:any
  allBooks:any
  constructor(private bookService:BookSeviceService,private userService:UserServiceService) { }

  // getActiveUser(){
  //   this.activeUser=this.bookService.getActiveUser()
  // }

  //  getAllUsers(){
  //    this.bookService.getUsers()
  //    .subscribe((users_data)=>{
  //      console.log(users_data);
  //      this.allUsers=users_data
  //      const requiredUser=this.allUsers[this.activeUser]
  //      this.completedBooksArray=requiredUser.Completed
  //      console.log(this.completedBooksArray);

  //      this.bookService.getBookList().subscribe((books)=>{
  //        this.allBooks=books

  //        this.extractRequiredBooks()
  //      })


  //           })
  //  }

  //  extractRequiredBooks(){
  //    for (let index of this.completedBooksArray){
  //     console.log(this.allBooks[index-1]);
  //     this.completedBooks.push(this.allBooks[index-1])

  //    }
  //   console.log(this.completedBooks);
  //  }
  activeUserData:any
  getBooksIndex(){
    const activeUserId=this.bookService.getActiveUser()
    this.userService.getUserById(activeUserId).subscribe((user)=>{
      this.activeUserData=user
      this.wishListedBooksArray=this.activeUserData.WishList
      console.log(this.wishListedBooksArray);
      this.bookService.getBookList().subscribe((books)=>{
      this.allBooks=books
      this.extractRequiredBooks()
      })
      
    })    
  }
  extractRequiredBooks(){
       for (let index of this.wishListedBooksArray){
         console.log(this.allBooks[index-1]);
         this.wishListedBooks.push(this.allBooks[index-1])
  
        }
       console.log(this.wishListedBooks);
      }





  ngOnInit(): void {
    this.getBooksIndex()  
    // this.getAllUsers();
  }

}
