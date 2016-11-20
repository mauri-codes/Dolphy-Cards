var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var flash = require("connect-flash");

var index = require("./routes/index");

app = express();

mongoose.connect("mongodb://localhost:27017/dolphy");

app.set("port", process.env.PORT || 3000);

//View Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile); //**  extra  **

//Set static folder
app.use(express.static(path.join(__dirname, "client")));

//Body Parser MW
app.use(bodyParser.json());//**  extra  **
app.use(bodyParser.urlencoded({extended: false}));

app.use("/", index);

app.listen(app.get("port"), function () {
    console.log("server started on port " + app.get("port"));
});