import { Component, Input }     from '@angular/core';

import { FlashCard }            from './FlashCard'

@Component({
    selector: 'flashcard-detail',
    template: `
        <div *ngIf="Flashcard">
         <div><label>id: </label>{{Flashcard.id}}</div>
          <div><label>front: </label>{{Flashcard.front}}</div>
          <div><label>back: </label>{{Flashcard.back}}</div>
          
          <div>
            <label>front: </label>
            <input [(ngModel)]="Flashcard.front" placeholder="front">
            <label>back: </label>
            <input [(ngModel)]="Flashcard.back"  placeholder="back">
          </div>
      </div>
`
})
export class FlashcardDetailComponent {
    @Input()
        Flashcard: FlashCard;
}
