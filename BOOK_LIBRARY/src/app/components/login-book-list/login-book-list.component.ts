import { Component, OnInit } from '@angular/core';
import { BookSeviceService } from 'src/app/services/book-sevice.service';

@Component({
  selector: 'app-login-book-list',
  templateUrl: './login-book-list.component.html',
  styleUrls: ['./login-book-list.component.css']
})
export class LoginBookListComponent implements OnInit {
  bookList:any

  constructor(private bookService:BookSeviceService) { 
  }
  getbooks(){
   this.bookService.getBookList().subscribe((data)=>{
    this.bookList=data;    
   })
  }

  ngOnInit(): void {
    this.getbooks()  
    
  }
}
