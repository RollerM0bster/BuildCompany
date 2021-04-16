import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthService } from '../../helpers/auth.service';
import { first } from 'rxjs/operators';
import { User } from '../../model/user';
import { MaterialService } from '../Materials/material.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  constructor(private cookie: CookieService, private route: ActivatedRoute, private router: Router, private log: AuthService, private mat: MaterialService) {}


  ngOnInit(): void {
  }

  LoginUser() {
    console.log(this.user);
    this.log.userLogin(this.user)
      .pipe(first())
      .subscribe(data => {
        console.log(data);
        const redirect = this.log.redirectUrl ? this.log.redirectUrl : '/materials';
        this.router.navigate([redirect]);
      },
        error => { console.log(error); }
      );

  }

  onSubmit() {
    this.LoginUser();
    this.log.loggedIn = true;
  }
  RegisterUser() {
    this.router.navigate(['/register']);
  }
}
