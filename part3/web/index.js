require("dotenv").config();
const express = require("express");
const Note = require("./models/note");
const cors = require("cors");
const app = express();

app.use(express.static("build"));
app.use(express.json());
app.use(cors());

/* let notes = [
  {
    id: 1,
    content: "HTML is easy11",
    date: "2019-05-30T17:30:31.098Z",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true,
  },
]; */

//console.log(mongoose.ConnectionStates == 1);

app.get("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});

app.get("/api/notes", (req, res) => {
  // res.json(notes);
  Note.find({}).then((notes) => {
    console.log(notes);
    res.json(notes);
    //mongoose.connection.close();
  });
});

app.get("/api/notes/:id", (req, res,next) => {
  const id = req.params.id;
  Note.findById(id)
    .then((note) => {
      if (note) {
        res.json(note);
      } else {
        res.status(404).end();
      }
    })
    .catch((error) => {
      console.log(error);
      next(error);
    });

  // const jsonnote = notes.find((note) => note.id === id);
  // if (jsonnote) {
  //   res.json(jsonnote);
  // } else {
  //   res.status(404).end();
  // }
});

app.delete("/api/notes/:id", (req, res,next) => {
  const id = req.params.id;
  Note.findByIdAndDelete(id).then(result=>{
    res.status(204).end();
  }).catch(error=>{
    next(error)
  })
});

const generateId = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
  return maxId + 1;
};

app.post("/api/notes", (request, response) => {
  const body = request.body;
  console.log(body);
  if (body.content == undefined) {
    return response.status(400).json({
      error: "content missing",
    });
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
    date: new Date(),
  });

  //notes = notes.concat(note);
  note.save().then((saveNote) => {
    response.json(saveNote);
  });
  //response.json(note);
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

// handler of requests with unknown endpoint
app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError" && error.kind === "ObjectId") {
    return response.status(400).send({ error: "malformatted id" });
  }

  next(error);
};

app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
