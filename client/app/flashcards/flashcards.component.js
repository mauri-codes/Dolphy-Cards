"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var FlashcardsComponent = (function () {
    function FlashcardsComponent() {
        this.title = "my flashcard";
        this.flashcards = FLASHCARDS;
    }
    FlashcardsComponent.prototype.onSelect = function (flashcard) {
        this.selectedFlashcard = flashcard;
    };
    FlashcardsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'flashcard',
            template: "\n      <h1>{{title}}</h1>\n      \n      <ul>\n        <li *ngFor=\"let flashcard of flashcards\" (click)=\"onSelect(flashcard)\">\n            <span>{{flashcard.front}} </span>{{flashcard.back}}\n        </li>\n      </ul>\n      <flashcard-detail [Flashcard]=\"selectedFlashcard\" ></flashcard-detail>\n      "
        }), 
        __metadata('design:paramtypes', [])
    ], FlashcardsComponent);
    return FlashcardsComponent;
}());
exports.FlashcardsComponent = FlashcardsComponent;
var FLASHCARDS = [
    { id: 1, front: 'Arduino Yun', back: 'is a great board' },
    { id: 2, front: 'Linux', back: 'is a great operating system' },
    { id: 3, front: 'Android', back: 'is a great Mobile OS' },
    { id: 4, front: 'Jquery', back: 'is a great js library' },
    { id: 5, front: 'Node.js', back: 'is a great back-end option' },
    { id: 6, front: 'php', back: 'is a piece of shit' },
    { id: 7, front: 'angular', back: 'is a great tool' },
    { id: 8, front: 'IU', back: 'is a great singer' },
];
//# sourceMappingURL=flashcards.component.js.map