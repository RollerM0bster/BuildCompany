import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  login:string;
  password:string;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  LoginUser(){
    if(this.login=="login" && this.password=="pass"){
     this.router.navigate(['/materials']);
    }
  }
}
