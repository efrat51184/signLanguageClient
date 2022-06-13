
export class User {
    userId!: number;
    userFirstName!: string;
    userLastName!: string;
    userPassword!: string;
    userEmail!: string;
    lastMark!: number;
    highestMark!: number;
    token!:string
    constructor(i:number,f: string,l: string,p: string,e:string,m: number,hm: number,t: string) {
        this.userId = i;
        this.userFirstName=f;  
        this.userPassword = p;
        this.userEmail=e; 
        this.lastMark = m;
        this.highestMark=hm; 
        this.token=t; 

    }                   
setUserFirstName(f:string)
{
this.userFirstName=f
}
}