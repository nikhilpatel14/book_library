import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-login-book',
  templateUrl: './no-login-book.component.html',
  styleUrls: ['./no-login-book.component.css']
})
export class NoLoginBookComponent implements OnInit {
  @Input() book:any
  constructor() {   
  }
  
  ngOnInit(): void {    
  }

}
