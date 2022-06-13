import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signInForm!:FormGroup
 
  u:User =new User(0,"","","","",0,0,"")
  constructor( private loginService: LoginService,private _router: Router) {   
}
 
  ngOnInit(): void {
    // alert("ngOnInit-register")
    this.signInForm=new FormGroup({
      userId:new FormControl(0),
      userFirstName:new FormControl(""),
      userLastName:new FormControl(""),
      userPassword:new FormControl(""),
      userEmail:new FormControl(""),
      lastMark:new FormControl(""),
      highestMark:new FormControl(""),
      token:new FormControl(""),
    })
  }

  signIn(f:string,l:string,e:string,p:string):void
  { 
    this.u.userFirstName=f
    this.u.userEmail=e
    this.u.userLastName=l
    this.u.userPassword=p


// alert(e)
// alert(this.signInForm.controls['userFirstName'].value)
// this.u=this.signInForm.value
//     alert(this.u.userFirstName)

// this.u.setUserFirstName(f)
// alert(this.u.userFirstName)
//     alert(this.signInForm.controls['userFirstName'].value)
//     console.log(document.getElementById("aaa"))
//     this.u=this.signInForm.value
    // alert(this.signInForm.get("userFirstName")?.value)
    // alert(this.signInForm.controls['userPassword'].value)

    // this.u.userEmail=this.signInForm.controls['userEmail'].value;
    // alert(this.u.userEmail)

    // this.u.userPassword=this.signInForm.controls['userPassword'].value;
    // this.u.userLastName=this.signInForm.controls['userFirstName'].value;
    // this.u.userFirstName=this.signInForm.controls['userLastName'].value;

    this.loginService.postUser(this.u).subscribe(data=>{this.u=data;this._router.navigate(["home"]); },err=>alert("Enter your details again"));
  }
}
