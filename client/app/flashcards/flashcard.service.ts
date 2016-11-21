import { Injectable } from '@angular/core';

import { FlashCard } from './FlashCard';
import { FLASHCARDS } from './mock-flashcards';

@Injectable()
export class FlashcardService {
    getFlashcards(): Promise< FlashCard[] >{
        return Promise.resolve(FLASHCARDS);
    }
}
