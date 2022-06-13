import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {
  type!:string

    constructor(private route:ActivatedRoute,private _router:Router) {
      
     }
   ngOnInit(): void {
   this.type = this.route.snapshot.params['type'];
   }

    navigate(page:string)
     {
      this._router.navigate([page,{type:this.type}])
     }
     changeType(e:string)
     {
      this.type=e;
     }
    };