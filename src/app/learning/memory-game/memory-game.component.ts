import { Component, OnInit } from '@angular/core';
import { CardData } from 'src/app/cardData';
import { Word } from 'src/app/models/word';
import { SignService } from 'src/app/services/sign.service';
import { ActivatedRoute } from '@angular/router';
import { PrimeNGConfig } from "primeng/api";
import { NumberValueAccessor } from '@angular/forms';
import { state } from '@angular/animations';

@Component({
  selector: 'app-memory-game',
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.scss']
})
export class MemoryGameComponent implements OnInit {
  signLetters: Word[] = []
  signNumbers: Word[] = []
  type!: string
  nextState!: 'default' | 'flipped' | 'matched';
  cardImagesLetters: [string, string][] = []
  cardImagesNumbers: [string, string][] = []
  cardPair: [CardData, CardData][] = []

  cardImages: [string, string][] = []
  finish: boolean = false;
  cards: CardData[] = [];
  chooseCards: CardData[] = [];
  size: number=0;
  flippedCards: CardData[] = [];
  matchedCount: number = 0
  chooseSizeFlag: boolean = false;
  constructor(private route: ActivatedRoute, private signService: SignService, private primengConfig: PrimeNGConfig) { }
  //בשביל הדוגמא
  //   w!:Word
  // w1!:Word
  // w2!:Word
  // w3!:Word
  ngOnInit() {
    this.primengConfig.ripple = true;

    //בשביל הדוגמא
    // this.w=new Word(1,1,'a','/assets/picture signs/a.png')
    // this.w1=new Word(1,1,'b','/assets/picture signs/b.png')
    // this.signLetters.push(this.w)

    // this.signLetters.push(this.w1)
    // this.w2=new Word(1,1,'1','/assets/picture signs/1.png')
    // this.w3=new Word(1,1,'2','/assets/picture signs/2.png')
    // this.signNumbers.push(this.w2)

    // this.signNumbers.push(this.w3)
    //כשמורידים את הדוגמא להוציא את זה 
    this.type = this.route.snapshot.params['type'];

    // this.signNumbers =


    if (this.type == 'Letters') {
      this.signService.getletterArray().subscribe(data => {
        this.signLetters = data;
        this.signLetters.forEach(element => {
          this.cardImagesLetters.push([element.nameWord, element.nameWord]);
          this.cardImagesLetters.push([element.nameWord, element.signWord]);
          let d1: CardData = {
            imageId: [element.nameWord, element.nameWord],
            state: 'default'
          }
          let d2: CardData = {
            imageId: [element.nameWord, element.signWord],
            state: 'default'
          }
          this.cardPair.push([d1, d2])

        });
        this.cardImages = this.cardImagesLetters
        this.setupCards();
        this.changeSize(4)
      })
      this.size = 25
    }
    else {
      this.signService.getnumberArray().subscribe(data => {
        this.signNumbers = data;
        this.signNumbers.forEach(element => {
          this.cardImagesNumbers.push([element.nameWord, element.nameWord]);
          this.cardImagesNumbers.push([element.nameWord, element.signWord]);
          let d1: CardData = {
            imageId: [element.nameWord, element.nameWord],
            state: 'default'
          }
          let d2: CardData = {
            imageId: [element.nameWord, element.signWord],
            state: 'default'
          }
          this.cardPair.push([d1, d2])
        });
        this.cardImages = this.cardImagesNumbers
        this.setupCards();
        this.changeSize(4)

      });
      this.size = 9

    }

  }

  setupCards(): void {
    this.cards = [];
    this.cardImages.forEach((image) => {
      const cardData: CardData = {
        imageId: image,
        state: 'default'
      };

      this.cards.push(cardData);
    });

    this.chooseCards = this.shuffleArray(this.chooseCards);
  }
  // chooseSize() {
  //   if (this.chooseSizeFlag == true)
  //     this.chooseSizeFlag = false;
  //   else {
  //     this.chooseSizeFlag = true;
  //   }
  // }

  shuffleArray(anArray: any[]): any[] {
    return anArray.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }

  cardClicked(index: number): void {
    console.log(this.cards)
    console.log(this.chooseCards)
    const cardInfo = this.chooseCards[index];

    if (cardInfo.state === 'default' && this.flippedCards.length < 2) {
      cardInfo.state = 'flipped';
      this.flippedCards.push(cardInfo);

      if (this.flippedCards.length === 2) {
        this.checkForCardMatch();
      }

    } else if (cardInfo.state === 'flipped') {
      cardInfo.state = 'default';
      this.flippedCards.pop();

    }
  }

  checkForCardMatch(): void {
    setTimeout(() => {
      const cardOne = this.flippedCards[0];
      const cardTwo = this.flippedCards[1];
      this.nextState = cardOne.imageId[0] === cardTwo.imageId[0] ? 'matched' : 'default';
      cardOne.state = cardTwo.state = this.nextState;

      this.flippedCards = [];

      if (this.nextState === 'matched') {
        this.matchedCount++;

        if (this.matchedCount === (this.cardImages.length / 2)) {
          this.finish = true;
          this.restart();
        }
      }

    }, 1500);
  }



  restart(): void {
    this.matchedCount = 0;
    this.setupCards();
  }
  changeSize(size: number) {
    this.chooseCards = []
    
    let tempSize = size;
    let randCard: boolean[] = []
    while (tempSize > 0) {
      randCard.push(false);
      tempSize--;
    }
    for (let index = 0; index < (size*size)/2; index++) {
      let randNum = Math.round((Math.random() * this.size));
      while (randCard[randNum]) {
         randNum = Math.round((Math.random() * this.size));
      }
      randCard[randNum] = true
      this.cardPair[randNum][0].state='default'
      this.cardPair[randNum][1].state='default'
      this.chooseCards.push(this.cardPair[randNum][0]);
      this.chooseCards.push(this.cardPair[randNum][1])
      this.chooseCards =this.shuffleArray( this.chooseCards)    }
  }
}
