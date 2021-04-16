import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/Model/user';
import { AuthService } from '../../helpers/auth.service';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  providers:[Location, {provide:LocationStrategy,useClass:PathLocationStrategy}],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn$:boolean;
  constructor(private log:AuthService,private router:Router) {
  }

  ngOnInit(): void {
  }

  logout(){
    this.log.userLogOut();
  }
}
