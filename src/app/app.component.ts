import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/model/user';
import { AuthService } from '../helpers/auth.service';
@Component({
  selector: 'app-root',
  template:`
  <app-navbar></app-navbar>
  <router-outlet></router-outlet>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'stroi-app';
  constructor(private router:Router,private log:AuthService){
  }

  logout(){
    this.log.userLogOut();
  }
}
