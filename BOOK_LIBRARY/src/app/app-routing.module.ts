import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGurad } from './auth-guard.service';
import { CompletedBooksComponent } from './components/completed-books/completed-books.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginBookListComponent } from './components/login-book-list/login-book-list.component';
import { LoginBookComponent } from './components/login-book/login-book.component';
import { LoginComponent } from './components/login/login.component';
import { NoLoginBookListComponent } from './components/no-login-book-list/no-login-book-list.component';
import { RegisterComponent } from './components/register/register.component';
import { WishlistedBooksComponent } from './components/wishlisted-books/wishlisted-books.component';

const routes: Routes = [
  
  
  {path:"dashboard", canActivate:[AuthGurad] ,component:DashboardComponent,children:[
    {path:"completed",component:CompletedBooksComponent},
    {path:"wishlisted",component:WishlistedBooksComponent},
    {path:"allbooks",component:LoginBookListComponent},
    {path:"",component:LoginBookListComponent}
  ]},
  
  {path:"",component:HomeComponent,children:[
    {path:"login",component:LoginComponent},
    {path:"register", component:RegisterComponent},
    {path:"", component:NoLoginBookListComponent},
  ]},
  
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
