import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { NoLoginBookComponent } from './components/no-login-book/no-login-book.component';
import { NoLoginBookListComponent } from './components/no-login-book-list/no-login-book-list.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginBookComponent } from './components/login-book/login-book.component';
import { LoginBookListComponent } from './components/login-book-list/login-book-list.component';
import { CompletedBooksComponent } from './components/completed-books/completed-books.component';
import { WishlistedBooksComponent } from './components/wishlisted-books/wishlisted-books.component';
import { RegisterComponent } from './components/register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGurad } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoLoginBookComponent,
    NoLoginBookListComponent,
    LoginBookComponent,
    LoginBookListComponent,
    CompletedBooksComponent,
    WishlistedBooksComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [AuthGurad],
  bootstrap: [AppComponent]
})
export class AppModule { }
