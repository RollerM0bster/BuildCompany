import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../helpers/auth.service';
import { first, map } from 'rxjs/operators';
import {DataService} from '../../helpers/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthData } from 'src/model/auth-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm:FormGroup;
  showErrorMessage=false;
  constructor(private route: ActivatedRoute, private router: Router, private log: AuthService, private mat: DataService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }


  initForm(){
      this.userForm= this.fb.group({
        login:['',Validators.required],
        password:['',Validators.required]
      })
  }
  LoginUser() {
    console.log(this.userForm.value);
    this.log.userLogin(this.userForm.value).subscribe(
      (data:AuthData)=>{
          if(data.status=='success')this.router.navigate(['/materials']);
          else{this.showErrorMessage=true;}
      });
  }
  InvalidUntouched(field:string):boolean{
    const fieldName=this.userForm.controls[field];
    return fieldName.invalid;
  }
  isUserFormInvalid():boolean{
    return this.InvalidUntouched('login') || this.InvalidUntouched('password');
  }
  RegisterUser() {
    this.router.navigate(['/register']);
  }
  
}

