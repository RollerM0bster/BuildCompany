import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';
import { map } from 'rxjs/operators';
import { BehaviorSubject, of } from 'rxjs';
import { Router } from '@angular/router';
@Injectable(
  {
    providedIn:'root'
  }
)
export class AuthService {
  baseUrl = environment.baseUrl;
  redirectUrl: string;
  data:any;
  loggedIn:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {

  }

  public userLogin(user: User) {
    return this.http.post<any>(this.baseUrl + '/user/login.php', user, { withCredentials: true });

  }
  public SignUp(user: User): Observable<Object> {
    return this.http.post(`${this.baseUrl}/user/register.php`, user);
  }

 public userLogOut() {
   this.http.post(`${this.baseUrl}/user/logout.php`,{},{withCredentials:true}).subscribe(data=>{
     console.log(data);
   });
    this.router.navigate(['/login']);
  }

  public isLoggedIn():any{
    return this.http.post(`${this.baseUrl}/user/islogin.php`, {}, { withCredentials: true });
}

}