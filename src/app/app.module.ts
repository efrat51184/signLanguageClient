import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogonModule } from './logon/logon.module';

import { CommonModule } from '@angular/common';
import { GeneralModule } from './general/general.module';
import { LearningModule } from './learning/learning.module';

import { LoginService } from './services/login.service';
import { TextService } from './services/text.service';



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,CommonModule,
    LogonModule,
    
     GeneralModule,
     LearningModule,
    
  ],
  declarations: [
    AppComponent,
    
   
 
  ],

  providers: [LoginService, TextService],
  bootstrap: [AppComponent]
})
export class AppModule { }
