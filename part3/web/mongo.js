const mongoose = require("mongoose");
const { urlencoded } = require("express");

// if (process.argv.length == 0) {
//   console.log("Please provide");
//   process.exit(1);
// }

const dbUrl = "mongodb://localhost:27017/node-app";
console.log(dbUrl);
mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("connect success");
  })
  .catch((error) => {
    console.log("connect error " + error);
  });

const noteSchema = new mongoose.Schema({
  content: String,
  data: Date,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

const note = new Note({
  content: "HTML",
  date: new Date(),
  important: true,
});

// note
//   .save()
//   .then((result) => {
//     console.log("note saved");

//     mongoose.connection.close();
//   })
//   .catch((error) => {
//     console.log("note saved error " + error);
//   });

Note.find({ important: false }).then((result) => {
  result.forEach((note) => {
    console.log(note);
  });
  mongoose.connection.close();
});
