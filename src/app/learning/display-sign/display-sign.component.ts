import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Word } from 'src/app/models/word';
import { SignService } from '../../services/sign.service';

@Component({
  selector: 'app-display-sign',
  templateUrl: './display-sign.component.html',
  styleUrls: ['./display-sign.component.scss']
})
export class DisplaySignComponent implements OnInit {

  signsOfNumbers!: Word[]
  signsOfLetters!: Word[]
  selectedSigns!: Word[]

  type: string = ""
  signToDisplay: string = ""

  constructor(private route: ActivatedRoute, private signService: SignService) { }

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    if (this.type == 'Letters') {
      this.signService.getletterArray().subscribe(data=>this.signsOfLetters = data)
      this.selectedSigns = this.signsOfLetters
      this.signService.getnumberArray().subscribe(data =>{this.signsOfNumbers=data}); 

    }
    else {
      this.signService.getnumberArray().subscribe(data =>{this.signsOfNumbers=data}); 
      this.selectedSigns = this.signsOfNumbers
      this.signService.getletterArray().subscribe(data=>this.signsOfLetters = data)

    }
  }

  display(s2: string) {
    this.signToDisplay = s2
  }

  changeType(t: string) {
    this.type =t;
    if (this.type == 'Letters')
      this.selectedSigns = this.signsOfLetters
    else
      this.selectedSigns = this.signsOfNumbers
  }

}
