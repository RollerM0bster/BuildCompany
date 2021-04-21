import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/observable';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';
import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.baseUrl;
  redirectUrl: string;
  loggedIn = false;

  constructor(private http: HttpClient, private router: Router) {

  }

  public userLogin(user: User) {
    return this.http.post<any>(this.baseUrl + '/user/login.php', user,{withCredentials:true})
      .pipe(map(user => {
        return user;
      }))

  }
///user/login.php
  public SignUp(user:User):Observable<Object>{
    console.log(user);
     return this.http.post(`${this.baseUrl}/user/register.php`,user);
   }

  userLogOut() {
    this.loggedIn = false;
    this.router.navigate(['/login']);
  }
/*
  isLoggedIn$():Observable<boolean>{
    return this.auth.getCurrentUser().pipe(
      map(user=>!!user),
      catchError(()=>of(false))
    );
  }
  */

  getCurrentUser$():void{
    
  }

}
