import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { Word } from 'src/app/models/word';
import { LoginService } from 'src/app/services/login.service';
import { SignService } from 'src/app/services/sign.service';
import { TooltipModule } from 'primeng/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import { style } from '@angular/animations';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  typeOfTest!:string
  showScore: Boolean = false
  showCountCorrectAnswer:boolean=false
  mark: number = 90
  YourHighestMark: string = "Your Highest Mark"
  NumbersSignArray!: Word[]
  LettersSignArray!: Word[]
  NumbersFlag: boolean[] = [false, false, false, false, false, false, false, false, false, false]
  LettersFlag: Array<boolean> = [false]
  rightsAnwers: boolean[] = [false, false, false, false, false, false, false, false, false, false]
  selectedArray!: Word[]
  randNum!: number
  type: string = ""
  testForm!: FormGroup;
  isGood: boolean = false;
  begin: boolean = true;
  ind!: number;
  size: number = 0
  countCorrectAnswer: number = 0
  ExampleArray!:Word[]
  toOpenCorrectAnswer: boolean = true
  toOpenScore: boolean = true

  array: Array<boolean> = [false]
  showLink: boolean = false
  constructor(private route: ActivatedRoute, private signService: SignService, private loginService: LoginService, private _router: Router) {
    this.testForm = new FormGroup({
      answer: new FormControl()
    })
  }
  //   tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  //   tooltipList = this.tooltipTriggerList.map(function (tooltipTriggerEl) {
  //    return new bootstrap.Tooltip(tooltipTriggerEl)
  //  })
  ngOnInit(): void {

    this.ind = 0;
    this.type = this.route.snapshot.params['type'];
    if (this.type == 'Letters') {
      this.size = 26
      this.signService.getletterArray().subscribe(data=>this.LettersSignArray = data)
      this.selectedArray = this.LettersSignArray
      this.signService.getnumberArray().subscribe(data =>{this.NumbersSignArray=data}); 

    }
    else {
      this.size = 10
      this.signService.getnumberArray().subscribe(data =>{this.NumbersSignArray=data}); 
      this.selectedArray = this.NumbersSignArray
      this.signService.getletterArray().subscribe(data=>this.LettersSignArray = data)
    }
    for (let index = 0; index < this.size; index++) {
      this.array[index] = false;

    }
    this.ExampleArray=[  {wordId: 1,categoryId: 1,nameWord: "1",signWord: "/assets/picture signs/1.png"},
    {wordId: 2,categoryId: 1,nameWord: "2",signWord: "/assets/picture signs/2.png"},
    {wordId: 2,categoryId: 1,nameWord: "3",signWord: "/assets/picture signs/3.png"},
    {wordId: 2,categoryId: 1,nameWord: "4",signWord: "/assets/picture signs/4.png"},
    {wordId: 2,categoryId: 1,nameWord: "5",signWord: "/assets/picture signs/5.png"},
    {wordId: 2,categoryId: 1,nameWord: "6",signWord: "/assets/picture signs/6.png"},
    {wordId: 2,categoryId: 1,nameWord: "7",signWord: "/assets/picture signs/7.png"},
    {wordId: 2,categoryId: 1,nameWord: "8",signWord: "/assets/picture signs/8.png"},
    {wordId: 2,categoryId: 1,nameWord: "9",signWord: "/assets/picture signs/9.png"},
    {wordId: 2,categoryId: 1,nameWord: "10",signWord: "/assets/picture signs/10.png"},] 
    this.beginRandNumber()
  }

  openScore() {
    var HighestScore = document.getElementById("highestScore")
    var p = document.getElementById("projects")
    var theMark = document.getElementById("theMark")

    var c = document.getElementById("contact")
    if (this.toOpenScore == true) {
      HighestScore?.setAttribute("style", "left:0px")
      let l=HighestScore?.getBoundingClientRect()?.top
      if(l!=undefined)
           l=l+190

           theMark?.setAttribute("style", "top:"+l+"px") 
                const id = sessionStorage.getItem('userId')

      if (id == null) {
        // אם עדיין לא נרשם ושמים לו קישור צריך מרחק של 187.14 פיקסלים
        let g=HighestScore?.getBoundingClientRect()?.top
if(g!=undefined)
     g=g+187.14
     p?.setAttribute("style", "top:"+g+"px")

let f=p?.getBoundingClientRect()?.top
if(f!=undefined)
     f=f+187.14
        c?.setAttribute("style", "top:"+f+"px")
        this.showScore=true
        // this.showLink = true
      }
      else {
        // אם שמים לו ציון צריך מרחק של 156.43 פיקסלים
        let g=HighestScore?.getBoundingClientRect()?.top
        if(g!=undefined)
             g=g+156.43
             p?.setAttribute("style", "top:"+g+"px")
        
        let f=p?.getBoundingClientRect()?.top
        if(f!=undefined)
             f=f+156.43
                c?.setAttribute("style", "top:"+f+"px")

        this.showScore = true
        let user!: User
        this.loginService.getUserById(id).subscribe(data => {
          user = data; this.mark = user.highestMark
        })
      }
      this.toOpenScore = false
      return
    }


    else {
      HighestScore?.setAttribute("style", "left:-80px")

      p?.setAttribute("style", "top:407.14px")

      c?.setAttribute("style", "top:500.71px")
      this.showScore = false; this.showLink = false
      this.toOpenScore = true
    }

  }
  openCorrectAnswer() {
    var correctAnswers = document.getElementById("correctAnswer")
    var HighestScore = document.getElementById("highestScore")
    var p = document.getElementById("projects")
    var c = document.getElementById("contact")
    if (this.toOpenCorrectAnswer== true) {
      correctAnswers?.setAttribute("style", "left:0px")
      this.showCountCorrectAnswer=true;

        // אם שמים לו ציון צריך מרחק של 156.43 פיקסלים
        this.countCorrectAnswer=9
        let topHighestScore=HighestScore?.getBoundingClientRect()?.top
        HighestScore?.setAttribute("style", "top:"+topHighestScore+90+"px")
        let topP=p?.getBoundingClientRect()?.top

        p?.setAttribute("style","top:"+topP+90+"px")
        let topC=c?.getBoundingClientRect()?.top

        c?.setAttribute("style","top:"+topC+90+"px")

      this.toOpenCorrectAnswer= false
      return
    }


    else {
      correctAnswers?.setAttribute("style", "left:-80px")

      p?.setAttribute("style", "top:407.14px")

      c?.setAttribute("style", "top:500.71px")
      this.showScore = false; this.showLink = false
      this.toOpenCorrectAnswer= true
    }

  }
  mouseEnter(a: string) {
    const id = sessionStorage.getItem('userId')
    if (id == null) {
      this.YourHighestMark = "You have not registered yet"
    }
    else {
      // this.showScore=true
      let user!: User
      this.loginService.getUserById(id).subscribe(data => {
        user = data;
        this.YourHighestMark = (user.highestMark).toString()
      })
    }
    this.YourHighestMark = "99"

  } mouseLeave(a: string) {
    this.YourHighestMark = "Your Highest Mark"

  }
  beginRandNumber() {

    this.randNum = Math.round((Math.random() * this.size));
    while (this.randNum == 0) {
      this.randNum = Math.round((Math.random() * this.size));

    }
  }
  start() {
    this.begin = false;
    this.ind++;
  }
  changeArray(e: string) {
    this.type = e;
    if (this.type == 'Letters') {
      this.size = 26
      this.selectedArray = this.LettersSignArray
    }
    else {
      this.size = 10
      this.selectedArray = this.NumbersSignArray
    }
  }
  finish() {
    if (this.ind < 9) {
      this.NumbersFlag[this.randNum] = true
      if (Number(this.testForm.value.answer) == this.randNum) {
        this.countCorrectAnswer++
        this.rightsAnwers[this.ind] = true
        this.isGood = true;
      }
      else {
        this.rightsAnwers[this.ind] = false
        //alert("that's worng! please try again.")
      }
      this.ind++
      while (this.NumbersFlag[this.randNum] == true) {
        this.beginRandNumber()
      }
    }
    else {
      alert("finish you get " + this.countCorrectAnswer * 10)

    }
  }

  navigate(page: string) {
    this._router.navigate([page, { type: 'typeDefault' }])
  }
  whichTest(type:string){
 this.typeOfTest=type
  }
}