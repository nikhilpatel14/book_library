
import { Component, OnInit } from '@angular/core';
import { BookSeviceService } from 'src/app/services/book-sevice.service';

@Component({
  selector: 'app-no-login-book-list',
  templateUrl: './no-login-book-list.component.html',
  styleUrls: ['./no-login-book-list.component.css']
})
export class NoLoginBookListComponent implements OnInit {
  bookList:any

  constructor(private bookService:BookSeviceService) { 
  }
  getbooks(){
   this.bookService.getBookList().subscribe((data)=>{
    this.bookList=data;   
    console.log(this.bookList[0]);
     
   })
  }

  ngOnInit(): void {
    this.getbooks()  
    
  }
}
