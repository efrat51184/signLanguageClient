import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';
import { MatRadioGroup } from '@angular/material/radio';
import { BrowserAnimationsModule } 
    from "@angular/platform-browser/animations"
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [HomeComponent,AboutComponent],
  imports: [ ReactiveFormsModule,FormsModule,BrowserModule,HttpClientModule,MatRadioModule,BrowserAnimationsModule
  ,  AppRoutingModule ],
  exports:[HomeComponent,MatRadioGroup]
 
})
export class GeneralModule {

 }
