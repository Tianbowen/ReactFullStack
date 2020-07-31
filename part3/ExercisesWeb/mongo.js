const mongoose = require("mongoose");

const leng = process.argv.length;
console.log(leng);

const args = process.argv;
args.forEach((str, i) => {
  console.log(i + "--" + str);
});

let mongodbUrl = "";
let name = "";
let number = "";

if (leng === 5) {
  mongodbUrl = args[2];
  name = args[3];
  number = args[4];
} else if (leng === 3) {
  mongodbUrl = args[2];
} else {
  console.log("args length is error");
  return;
}

mongoose
  .connect(mongodbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("connect sucess");
  });

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personSchema);

if (leng === 3) {
  Person.find({}).then((result) => {
    console.log("phonebooks:");
    result.forEach((person) => {
      console.log(person);
    });
    mongoose.connection.close();
  });
} else if (leng === 5) {
  const person = new Person({
    name: name,
    number: number,
  });
  console.log(`add ${person.name} number:${person.number} to phonebook`);
  person.save().then((result) => {
    console.log("person saved ");
    mongoose.connection.close();
  });
}
