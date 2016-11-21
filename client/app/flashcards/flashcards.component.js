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
var flashcard_service_1 = require('./flashcard.service');
var FlashcardsComponent = (function () {
    //Angular will create an instance of Flashcard when FlashcardsComponent is created
    function FlashcardsComponent(flashcardService) {
        this.flashcardService = flashcardService;
        this.title = "my flashcard";
    }
    FlashcardsComponent.prototype.ngOnInit = function () {
        this.getFlashcard();
    };
    FlashcardsComponent.prototype.onSelect = function (flashcard) {
        this.selectedFlashcard = flashcard;
    };
    FlashcardsComponent.prototype.getFlashcard = function () {
        var _this = this;
        this.flashcardService.getFlashcards().then(function (flashcards) { return _this.flashcards = flashcards; });
    };
    FlashcardsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'flashcard',
            template: "\n      <h1>{{title}}</h1>\n      \n      <ul>\n        <li *ngFor=\"let flashcard of flashcards\" (click)=\"onSelect(flashcard)\">\n            <span>{{flashcard.front}} </span>{{flashcard.back}}\n        </li>\n      </ul>\n      <flashcard-detail [Flashcard]=\"selectedFlashcard\" ></flashcard-detail>\n      ",
            providers: [flashcard_service_1.FlashcardService]
        }), 
        __metadata('design:paramtypes', [flashcard_service_1.FlashcardService])
    ], FlashcardsComponent);
    return FlashcardsComponent;
}());
exports.FlashcardsComponent = FlashcardsComponent;
//# sourceMappingURL=flashcards.component.js.map