import { Component } from '@angular/core';
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
      <div *ngIf="selectedFlashcard">
         <div><label>id: </label>{{selectedFlashcard.id}}</div>
          <div><label>front: </label>{{selectedFlashcard.front}}</div>
          <div><label>back: </label>{{selectedFlashcard.back}}</div>
          
          <div>
            <label>front: </label>
            <input [(ngModel)]="selectedFlashcard.front" placeholder="front">
            <label>back: </label>
            <input [(ngModel)]="selectedFlashcard.back"  placeholder="back">
          </div>
      </div>

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

export class FlashCard {
    front: string;
    back: string;
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