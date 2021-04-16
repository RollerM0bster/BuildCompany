import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { User } from "src/model/user";

@Injectable({
    providedIn: 'root'
  })
export class SessionAuthStrategy{
    private loggedUser: User;
    private baseUrl=environment.baseUrl;
    constructor(private http: HttpClient) { }

    doLoginUser(user:User): void {
        this.loggedUser=user;
    }
    doLogoutUser(): void {
        this.loggedUser=undefined;
    }
    /*getCurrentUser(): Observable<User> {
        if(this.loggedUser){
            return of(this.loggedUser);
        }else{
            return this.http.get<User>(`${this.baseUrl}/user`)
            .pipe(tap(user=>this.loggedUser=user));
        }
    }*/
}
