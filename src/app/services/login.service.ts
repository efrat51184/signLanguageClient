import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user";
import { UserDto } from "../models/UserDto";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

  }
  getUserById(id:string): Observable<User>
  {
    return this.http.get<User>("/api/user/login/"+id);
  }

  getUser(user:UserDto): Observable<User>
  {
    return this.http.post<User>("/api/user/login",user);
  }
  postUser(user:User): Observable<User>
  {
 
    return this.http.post<User>("/api/user",user);
  }
}