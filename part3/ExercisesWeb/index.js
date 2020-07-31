require("dotenv").config();
const Person = require("./models/phonebook");
const express = require("express");
const morgan = require("morgan");
morgan.token("bodyRequest", function getBody(req) {
  return JSON.stringify(req.body)=='{}'?' ':JSON.stringify(req.body);
});
/* let persons = [
  {
    id: 1,
    name: "arweb",
    number: "12654",
  },
  {
    id: 2,
    name: "afe",
    number: "65498",
  },
  {
    id: 3,
    name: "vadc",
    number: "989181",
  },
]; */

const app = express();

app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :bodyRequest"
  )
);

app.use(express.json());

app.get("/info", (req, res) => {
  res.send(
    `<div><h3>Phonebook has info for ${
      persons.length
    }</h3><h3>${new Date().toUTCString()}</h3></div>`
  );
});

app.get("/api/persons", (req, res) => {
  Person.find({}).then((persons) => {
    res.json(persons);
  });
  //res.json(persons);
});

app.get("/api/persons/:id", (req, res) => {
  const id = req.params.id;

  Person.findById(id).then((person) => {
    res.json(person);
  });
  // const person = persons.find((x) => x.id === id);

  // if (!person) {
  //   return res.status(404).end();
  // }

  // res.json(person);
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);

  const person = persons.find((x) => x.id === id);
  if (!person) {
    return res.status(404).end();
  }

  persons = persons.filter((x) => x.id !== person.id);

  res.end();
});

const getRandId = (max) => {
  console.log(max);
  return Math.floor(Math.random() * Math.floor(max));
};

app.post("/api/persons", (req, res) => {
  const body = req.body;

  if (!body.name) {
    return res.status(400).json({ error: "name must be unique" });
  }

  if (!body.number) {
    return res.status(400).json({ error: "number must be unique" });
  }
  //const person =  persons.find((x) => x.number === body.number);

  //if (person) {
  //  return res.status(400).json({ error: "number are already" });
  //}

  const id = getRandId(10000);

  const newPerson = new Person({
    name: body.name,
    number: body.number,
  });
  newPerson.save().then((savePerson) => {
    res.json(savePerson);
  })
  //persons = persons.concat(newPerson);

  //res.json(newPerson);
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
