import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookSeviceService } from 'src/app/services/book-sevice.service';
import { UserServiceService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup(
    {
      username:new FormControl("",[Validators.required,Validators.minLength(3)]),
      password:new FormControl("",[Validators.required,Validators.minLength(6)])
    }
  )

  constructor(
    private userService:UserServiceService,
    private router:Router,
    private bookservice:BookSeviceService) { }

  getUsername(){
  return  this.loginForm.get('username')
  }
  
 getPassword(){
  return this.loginForm.get('password')
 }

 getUsernameError(){
  if(this.getUsername()?.invalid && (this.getUsername()?.dirty||this.getUsername()?.touched)){
    
    
    // return "User Name should not be blank"
    if (this.getUsername()?.hasError('required'))
      return "username should not be blank"
    else if (this.getUsername()?.hasError('minlength'))
      return "username can not be less than 3 character"    
    else
      return "ok";
  }
  else
    return ""
 }

 getPasswordError(){
  if(this.getPassword()?.invalid && (this.getPassword()?.dirty||this.getPassword()?.touched)){
    
    if (this.getPassword()?.hasError('required'))
      return "Password should not be blank"
    else if (this.getPassword()?.hasError('minlength'))
      return "Password can not be less than 6 character"    
    else
      return "ok";
  }
  else
    return ""
 }
allUsers:any
username:any;
password:any
 login(){
  this.username=this.getUsername()?.value
  this.password=this.getPassword()?.value
  console.log(this.username,this.password);
  this.userService.getUser().subscribe((users)=>{
    this.allUsers=users
    console.log("allusers",this.allUsers);
    this.validate();
    
       
  }) 
 }
 
 validate(){
   for (let user of this.allUsers){
     if (user.userName==this.username && user.Password==this.password){
       console.log("loggin succcessful");
       console.log("loggedUser",user);
       
       this.bookservice.setActiveUserId(user.id)
       this.router.navigateByUrl("/dashboard")
       this.userService.setLogin(true)
        // this.router.navigateByUrl("/completedbooks")
       break     
     }
   }
   if (this.userService.getLogin()==false)
    alert("Not a valid User Please check Username and Password") 
  
    
   this.loginForm.get('username')?.setValue("")
   this.loginForm.get('password')?.setValue("")
 }


  ngOnInit(): void {
  }

}
