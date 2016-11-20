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
var FlashCard_1 = require('./FlashCard');
var FlashcardDetailComponent = (function () {
    function FlashcardDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', FlashCard_1.FlashCard)
    ], FlashcardDetailComponent.prototype, "Flashcard", void 0);
    FlashcardDetailComponent = __decorate([
        core_1.Component({
            selector: 'flashcard-detail',
            template: "\n        <div *ngIf=\"Flashcard\">\n         <div><label>id: </label>{{Flashcard.id}}</div>\n          <div><label>front: </label>{{Flashcard.front}}</div>\n          <div><label>back: </label>{{Flashcard.back}}</div>\n          \n          <div>\n            <label>front: </label>\n            <input [(ngModel)]=\"Flashcard.front\" placeholder=\"front\">\n            <label>back: </label>\n            <input [(ngModel)]=\"Flashcard.back\"  placeholder=\"back\">\n          </div>\n      </div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], FlashcardDetailComponent);
    return FlashcardDetailComponent;
}());
exports.FlashcardDetailComponent = FlashcardDetailComponent;
//# sourceMappingURL=flashcard-detail.component.js.map