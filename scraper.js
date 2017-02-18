var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");

var request = require("request");
var cheerio = require("cheerio");

var mongoose = require("mongoose");
var mongoURI = require("./mongoURI")
var Promise = require("bluebird");

mongoose.Promise = Promise;

var app = express();
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static("public"));


mongoose.connect(mongoURI.uriEnv || "mongodb://localhost/mongoose_scraper_db");
var db = mongoose.connection;

db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});


var articleCntrlr = require("./controllers/article_controller.js");
app.use(articleCntrlr);

app.listen(3000, function(){
  console.log("App running on port 3000!")
});
