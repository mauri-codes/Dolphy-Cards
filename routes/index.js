var express = require("express");

var Flashcard = require("../models/flashcard");

var router = express.Router();

router.get("/", function (req,res,next) {
    res.render("index");
});

module.exports = router;