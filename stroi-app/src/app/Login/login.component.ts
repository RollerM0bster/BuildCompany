import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:string;
  password:string;
  constructor(private router: Router) { }

  ngOnInit(): void {
      
  }

  LoginUser(){
    if(this.login=="login" && this.password=="pass"){
     this.router.navigate(['/materials']);
    }
  }
}
