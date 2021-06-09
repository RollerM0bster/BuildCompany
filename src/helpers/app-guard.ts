import { CanActivate } from "@angular/router";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, of } from 'rxjs';
import { map, tap } from "rxjs/operators";
import { AuthData } from '../model/auth-data';

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthService) {
  }
  canActivate(): Observable<boolean> {

    return this.auth.isLoggedIn().pipe(map((log: AuthData) => {
      if (log.status != 'success') {
        this.router.navigate(['/login']);
        return false;
      }
      else {
        if (log.role == 'director') this.auth.isDir.next(true);
        else this.auth.isStore.next(true);
        this.auth.loggedIn.next(true);
        return true;
      }
    }
    ));
  }



}
