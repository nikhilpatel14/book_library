import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookSeviceService } from 'src/app/services/book-sevice.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private bookService:BookSeviceService,private userService:UserServiceService,private router:Router) { }
  activeUserId:any
  activeUserInfo:any
  usersArray:any
  loadDashboard(){
    this.router.navigateByUrl("/dashboard")
  }
  getUserInfo(){
    this.activeUserId=this.bookService.getActiveUser()
    this.userService.getUserById(this.activeUserId).subscribe((user)=>{
      console.log(user);
      
    })
    
    
  }

  showCompleted(){
    this.router.navigateByUrl("/dashboard/completed")
    
  }
  showWishListed(){
    this.router.navigateByUrl("/dashboard/wishlisted")
    
  }

  showAll(){
    this.router.navigateByUrl("/dashboard/allbooks")
  }


  logout(){
    this.userService.setLogin(false)
    alert("You have succesfully logged out Click OK")
    this.router.navigateByUrl("/login")
  }

  ngOnInit(): void {
    this.getUserInfo()
  }

}
