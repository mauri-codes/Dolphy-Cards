import { Component }            from '@angular/core';

import { FlashCard }            from './FlashCard';

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
      `

})
export class FlashcardsComponent {
    title = "my flashcard";
    flashcards = FLASHCARDS;
    selectedFlashcard: FlashCard;
    onSelect(flashcard: FlashCard):void{
        this.selectedFlashcard = flashcard;
    }
}

const FLASHCARDS: FlashCard[] = [
    {id: 1, front: 'Arduino Yun', back: 'is a great board'},
    {id: 2, front: 'Linux', back: 'is a great operating system'},
    {id: 3, front: 'Android', back: 'is a great Mobile OS'},
    {id: 4, front: 'Jquery', back: 'is a great js library'},
    {id: 5, front: 'Node.js', back: 'is a great back-end option'},
    {id: 6, front: 'php', back: 'is a piece of shit'},
    {id: 7, front: 'angular', back: 'is a great tool'},
    {id: 8, front: 'IU', back: 'is a great singer'},
];