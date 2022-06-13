import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
//import { EventEmitter } from 'stream';
import { EventEmitter } from '@angular/core';

import { LoginService } from '../../services/login.service';
import { User } from 'src/app/models/user';
import { UserDto } from 'src/app/models/UserDto';
import { FormControl, FormGroup, Validators } from '@angular/forms';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm!:FormGroup 
  constructor(private _router: Router, private loginService: LoginService) {
  }
  ngOnInit(): void {
    this.loginForm=new FormGroup({
      userEmail:new FormControl("",Validators.required),
      userPassword:new FormControl("",Validators.required)
    })
  }
  u!:User
  ud:UserDto=new UserDto("","")

  @Output() enterToTheSite: EventEmitter<Boolean> = new EventEmitter<Boolean>();//boolean=false;
  flag: Boolean = false;
 
  sendValues() {
    this.enterToTheSite.emit(this.flag)
  }
  loginNavigate(page: string) {
    
    if (page == "home")
      this.flag = true;
    this._router.navigate([page]);
  }
  signin() {
    this.ud=this.loginForm.value
  this.loginService.getUser(this.ud).subscribe(data=>{this.u=data;
     this._router.navigate(["home"]); 
     sessionStorage.setItem('userToken',this.u.token);
  sessionStorage.setItem('userId',this.u.userId.toString());
}, err=>alert("Enter Your Details Again"));
    
  
  }
}
