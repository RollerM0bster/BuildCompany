import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
  })

export class AuthGuard implements CanActivate {
    constructor(private auth:AuthService, private router:Router){}
    canActivate():Observable<boolean> {
        return; /*this.auth.isLoggedIn$().pipe(
            tap(isLoggedIn=>{
                if(isLoggedIn){
                    this.router.navigate(['']);
                }
            }),
            map(isLoggedIn=>!isLoggedIn)
        );*/
    }
}
