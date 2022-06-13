
export class UserDto{
 userPassword: string;
 userEmail: string;

 constructor(userPassword: string,userEmail:string) {
     this.userPassword = userPassword;
     this.userEmail=userEmail;                                      
 }
}