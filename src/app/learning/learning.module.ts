import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralModule } from '../general/general.module';

import { DisplaySignComponent } from './display-sign/display-sign.component';
import { PracticeComponent } from './practice/practice.component';
import { TestComponent } from './test/test.component';
import { GameCardComponent } from './game-card/game-card.component';
import { MemoryGameComponent } from './memory-game/memory-game.component';
import { CompletionGameComponent } from './completion-game/completion-game.component';

import {TooltipModule} from 'primeng/tooltip';
import {MatTooltipModule} from '@angular/material/tooltip';

import { DialogModule } from "primeng/dialog";
// import { BrowserAnimationsModule } 
//     from "@angular/platform-browser/animations";
    import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DisplaySignComponent, PracticeComponent, TestComponent,MemoryGameComponent, GameCardComponent,CompletionGameComponent],
  imports: [GeneralModule, CommonModule,ReactiveFormsModule,TooltipModule,MatTooltipModule,
  DialogModule],
  exports: [DisplaySignComponent,GameCardComponent,PracticeComponent]
})
export class LearningModule { }
