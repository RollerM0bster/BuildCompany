import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../../helpers/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logged: Observable<boolean>;
  isDirector: Observable<boolean>;
  isStorekeeper: Observable<boolean>;
  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.logged = this.auth.loggedIn.asObservable();
    this.isDirector = this.auth.isDir.asObservable();
    this.isStorekeeper = this.auth.isStore.asObservable();
  
  }

  logout() {
    this.auth.userLogOut().subscribe(data => {
      this.auth.loggedIn.next(false);
      this.auth.isDir.next(false);
      this.auth.isStore.next(false);
      this.router.navigate(['/login']);

    });
  }
}
