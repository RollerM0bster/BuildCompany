
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../helpers/auth.service';
import { first } from 'rxjs/operators';
import { User } from '../../model/user';
import { MaterialService } from '../materials/material.service';
import { getUrlScheme } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  constructor(private route: ActivatedRoute, private router: Router, private log: AuthService, private mat: MaterialService) { }

  ngOnInit(): void {
  }

  LoginUser() {
    this.log.userLogin(this.user)
      .pipe(first())
      .subscribe((data) => {
        const redirect = this.log.redirectUrl ? this.log.redirectUrl : '/materials';
        this.router.navigate([redirect]);
      },
        error => { console.log(error); }
      );

  }

  onSubmit() {
    this.LoginUser();
  }
  RegisterUser() {
    this.router.navigate(['/register']);
  }

  getUrl(){
    return "url(https://www.pexels.com/photo/nothin-to-see-here-neon-sign-3342739/)";
  }
  
}

