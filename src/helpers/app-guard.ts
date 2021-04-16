import { CanActivate, UrlTree } from "@angular/router";
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import { Observable } from "rxjs";
import {AuthService} from './auth.service';
import { tap } from "rxjs/operators";

@Injectable()
export class AppGuard implements CanActivate {

    constructor(private router:Router, private auth:AuthService){
    }
    canActivate(): Observable<boolean> {
        return;
        
        /*this.auth.isLoggedIn$().pipe(
            tap(isLoggedIn=>{
                if(!isLoggedIn){
                    this.router.navigate(['/login']);
                }
            })
        );*/
    }
}
