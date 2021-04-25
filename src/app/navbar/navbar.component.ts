import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../helpers/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logged: Observable<boolean>;
  constructor(private auth: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    this.logged=this.auth.loggedIn.asObservable();
  }

  logout() {
    this.auth.userLogOut();
  }
}
