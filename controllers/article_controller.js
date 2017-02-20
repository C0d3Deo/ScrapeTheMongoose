var Article = require("../models/article.js");
var express = require("express");
var mongoose = require("mongoose");
var router = express.Router();


router.get("/", function(req, res) {
  res.render("index");
});

router.get("api/scrape", function(req, res) {
  request('http://www.gamasutra.com', function (error, response, html) {

  	// Load the HTML into cheerio and save it to a variable
    // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
    var $ = cheerio.load(html);

    // An empty array to save the data that we'll scrape
    var result = {};

    // Select each instance of the HTML body that you want to scrape
    // NOTE: Cheerio selectors function similarly to jQuery's selectors,
    // but be sure to visit the package's npm page to see how it works
    $('span').each(function(i, element){

      var link = $(element).children().attr("href");
      var title = $(element).children().text().trim();

      // Save these results in an object that we'll push into the result array we defined earlier
      var entry = new Article(result);

      // Now, save that entry to the db
      entry.save(function(err, doc) {
        // Log any errors
        if (err) {
          console.log(err);
        }
        // Or log the doc
        else {
          console.log(doc);
        }
      });
    });
  });
});

module.exports = router;
