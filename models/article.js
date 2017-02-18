var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
  },
  link: {
    type: String,
    required: true
  },

  //Explanantion for learning: this is block of code below is defining in the schema that the data in collection will have a relation another collection that I have declared as "Note" (the file in the directoty it's going to look for.)
  note: {
    type: Schema.Types.ObjectId,
    ref: "note"
  }
});

var Article = mongoose.model("article", ArticleSchema);

module.exports = Article;
