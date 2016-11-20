var mongoose = require("mongoose");

var flashcardSchema = mongoose.Schema({
    front: {type: String, required: true},
    back:  {type: String, required: true},
    extra: String,
    deck: Number,
    creator: String,
    createdAt: {type: Date, default: Date.now}
});

flashcardSchema.methods.getFront = function () {
    return this.front;
}

flashcardSchema.methods.getBack = function () {
    return this.back;
}

var Flashcard = mongoose.model("Flashcard", flashcardSchema);
module.exports = Flashcard;