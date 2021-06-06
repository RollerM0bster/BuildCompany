import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../model/user';
import { AuthService } from 'src/helpers/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  roles: string[] = ['директор', 'кладовщик'];
  user: User = new User();

  constructor(private router: Router, private auth: AuthService) {

  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.user.submit = 'submit';
    this.SignUpUser();
    this.goToLogin();
  }
  SignUpUser() {
    console.log(this.user);
    this.auth.SignUp(this.user)
      .subscribe(data => {

        console.log(data);
      },
        error => { console.log(error); });
  }
  goToLogin() { this.router.navigate(['/login']); }
  radioChangeHandler(event: any) {
    this.user.role = event.target.value;
    console.log(this.user.role);
  }
}

