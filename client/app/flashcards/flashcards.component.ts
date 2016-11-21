import { Component }            from '@angular/core';
import { OnInit } from '@angular/core';

import { FlashCard }            from './FlashCard';
import { FlashcardService }     from './flashcard.service';


@Component({
    moduleId: module.id,
    selector: 'flashcard',
    template:`
      <h1>{{title}}</h1>
      
      <ul>
        <li *ngFor="let flashcard of flashcards" (click)="onSelect(flashcard)">
            <span>{{flashcard.front}} </span>{{flashcard.back}}
        </li>
      </ul>
      <flashcard-detail [Flashcard]="selectedFlashcard" ></flashcard-detail>
      `,
        providers: [FlashcardService]

})
export class FlashcardsComponent implements OnInit{
    ngOnInit(): void {
        this.getFlashcard();
    }
    //Angular will create an instance of Flashcard when FlashcardsComponent is created
    constructor(private flashcardService: FlashcardService){ }
    flashcards: FlashCard[];
    title = "my flashcard";
    selectedFlashcard: FlashCard;
    onSelect(flashcard: FlashCard):void{
        this.selectedFlashcard = flashcard;
    }
    getFlashcard():void{
        this.flashcardService.getFlashcards().then(flashcards => this.flashcards = flashcards)
    }
}
