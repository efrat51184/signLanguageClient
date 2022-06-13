import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { GeneralModule } from '../general/general.module';

@NgModule({
  declarations: [LoginComponent,RegisterComponent  ],
  imports: [
    CommonModule, ReactiveFormsModule,HttpClientModule,FormsModule,GeneralModule
  ]
})
export class LogonModule { }
