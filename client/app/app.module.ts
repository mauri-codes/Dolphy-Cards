import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';

import { AppComponent }         from './app.component';
import { FlashcardsComponent }  from './flashcards/flashcards.component'

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        FlashcardsComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
