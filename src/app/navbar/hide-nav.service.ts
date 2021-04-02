import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import {NavbarService} from '../navbar/navbar.service';
@Injectable({
  providedIn: 'root'
})
export class HideNavService implements CanDeactivate<LoginComponent>{

  constructor(public nav:NavbarService) { }
  canDeactivate(component: LoginComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    this.nav.show();
    return true;
  }
}
