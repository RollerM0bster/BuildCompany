import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";
import {User} from '../model/user';
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  result={"status":"success"};
  constructor(private auth: AuthService, private router: Router) { }
  canActivate():Observable< boolean> {
    return this.auth.isLoggedIn().pipe(
      map(log=>{
      if(JSON.stringify(log)==JSON.stringify(this.result)){
        this.auth.loggedIn.next(true);
        this.router.navigate(['/materials']);
        return false;
      }
        else{
          return true;
        }
      }
    ));
  }
}