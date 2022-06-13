import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Text } from 'src/app/models/text';

@Injectable({
    providedIn: 'root'
  })
  export class TextService {
   numberArray:Text[]=[]
   letterArray:Text[]=[]
    constructor(private http: HttpClient,private _router:Router) {
      this.http.get<Text[]>("api/Text/"+1).subscribe(data=>this.letterArray=data)
      this.http.get<Text[]>("api/Text/"+2).subscribe(data=>this.numberArray=data)

     }
getLettersText():Observable<Text[]>
{
   return this.http.get<Text[]>("api/Text/"+1);
}
getNumbersText():Observable<Text[]>
{
   return this.http.get<Text[]>("api/Text/"+2);
}
  }