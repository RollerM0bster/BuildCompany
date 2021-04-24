import { CanActivate} from "@angular/router";
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';
import { Observable, of } from 'rxjs';
import { map, tap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
  })
export class AppGuard implements CanActivate {
  result={"status":"success"};
    constructor(private router:Router, private auth:AuthService){
    }
    canActivate(): Observable<boolean> {

      return this.auth.isLoggedIn().pipe(map(log=>{
        if(JSON.stringify(log)!==JSON.stringify(this.result)){
          this.router.navigate(['/login']);
          return false;
        }
          else if(JSON.stringify(log)===JSON.stringify(this.result)){
            this.auth.loggedIn.next(true);
            return true;
          }
        }
      ));
    }

    

}
