import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Word } from '../models/word';


@Injectable({
  providedIn: 'root'
})
export class SignService {
  NumbersSignArray!:Word[]
  LettersSignArray!:Word[]
  constructor(private http: HttpClient,private _router:Router) { 
   
    // this.http.get<Word[]>("api/word/"+1).subscribe(data =>{this.LettersSignArray=data});
  }
  
  getnumberArray():Observable<Word[]>
  {  
    return this.http.get<Word[]>("api/word/"+2)
    // .subscribe(data =>{this.NumbersSignArray=data}); 
    // if(this.NumbersSignArray==undefined)
    //   alert(undefined)
    //   return this.NumbersSignArray
  }

  getletterArray():Observable<Word[]>
  {
    return this.http.get<Word[]>("api/word/"+1)
  }
}
