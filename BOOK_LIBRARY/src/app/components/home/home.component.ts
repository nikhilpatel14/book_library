import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  showBooks(){
    this.router.navigateByUrl("")
  }

  login(){
    this.router.navigateByUrl("/login")
  }
  register(){
    this.router.navigateByUrl("/register")
  }

  ngOnInit(): void {
  }

}
