import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { AuthData } from "src/model/auth-data";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) { }
  canActivate(): Observable<boolean> {
    return this.auth.isLoggedIn().pipe(
      map((log: AuthData) => {
        console.log(log);
        if (log.status == 'success') {
          if (log.role == 'director') {
            this.auth.isDir.next(true);
            this.router.navigate(["http://82.146.52.18:8050"]);
          }
          else this.auth.isStore.next(true);
          {
          this.router.navigate(['/materials']);
          }
          return false;
        }
        else {
          return true;
        }
      }
      ));
  }
}
