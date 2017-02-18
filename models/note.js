import mongoose from "mongoose"
var Schema = mongoose.Schema;

var NoteSchema = new Schema ({
  note: {
    type: String,
  },
  // If I have time to implement:
  // nick_name: {
  //   type: String
  // },
  {
    timestamp: true
  }
});

var Note = mongoose.model("note", NoteSchema);

module.exports = Note
