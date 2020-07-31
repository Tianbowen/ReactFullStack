/* import React, { useState } from "react";
import Note from "./components/Note";

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);

  const [newNote, setNewNote] = useState("a new note");

  const [showAll, setShowAll] = useState(true);

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  const addNote = (event) => {
    event.preventDefault();

    const noteObject = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    };

    setNotes(notes.concat(noteObject));
    setNewNote("");
    console.log("button clicked", event.target);
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "importent" : "All"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App; */

//-------------------Exercises 2.6-2.10-------------

/* import React, { useState } from "react";
import Phone from "./components/Phone";

const App = (props) => {
  const [persons, setPersons] = useState(props.phonebooks);
  console.log(persons);
  const [newPerson, setNewPerson] = useState("a new person");

  const [newNumber, setNewNumber] = useState("a new number");

  const [searchName, setSearchName] = useState("");

  const personToShow =
    searchName.length == 0
      ? persons.map(ele=>({id:ele.id,name:ele.name.toLowerCase(),number:ele.number}))
      : persons.map(ele=>({id:ele.id,name:ele.name.toLowerCase(),number:ele.number})).filter((ele) => ele.name.indexOf(searchName) > -1);

  const addPerson = (event) => {
    event.preventDefault();
    var index = persons.findIndex((element) => element.name === newPerson);
    if (index == -1) {
      const newObject = {
        id: persons.length + 1,
        name: newPerson,
        number: newNumber,
      };
      setPersons(persons.concat(newObject));
      setNewPerson("");
    } else {
      alert(`${newPerson} is already add in phonebooks`);
    }

    console.log(event.target);
  };

  const handlePersonChange = (event) => {
    setNewPerson(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchNameChange = (event) => {
    setSearchName(event.target.value.toLowerCase());
  };

  return (
    <div>
      <h1>PhoneBooks</h1>
      <div>
        <input value={searchName} onChange={handleSearchNameChange} />
      </div>
      <ul>
        {personToShow.map((person) => (
          <Phone key={person.id} person={person} />
        ))}
      </ul>

      <form onSubmit={addPerson}>
        <input value={newPerson} onChange={handlePersonChange} />
        <input vlaue={newNumber} onChange={handleNumberChange} />
        <button type="submit">Add Person</button>
      </form>
    </div>
  );
};

export default App; */

//----------------part2 b form------------------

/* import React, { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNode] = useState("");
  const [showAll, setShowAll] = useState(true);

  const hook = () => {
    console.log("effect");
    axios.get("http://localhost:3001/notes").then((response) => {
      setNotes(response.data);
    });
  };
  useEffect(hook, []);
  console.log("render", notes.length, "notes");

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  const handleNoteChange = (event) => {
    setNewNode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newNoteObj = {
      // id: notes.length + 1,
      content: newNote,
      date: new Date(),
      important: Math.random > 0.5,
    };

    axios.post("http://localhost:3001/notes", newNoteObj).then((response) => {
      console.log(response);
      setNotes(notes.concat(response.data));
      setNewNode("");
    });
  };

  const toggerImportanceOf = (id) => {
    const url = `http://localhost:3001/notes/${id}`;
    const note = notes.find((note) => note.id === id);
    const changeNote = { ...note, important: !note.important };

    axios.put(url, changeNote).then((response) => {
      console.log(response);
      setNotes(notes.map((note) => (note.id !== id ? note : response.data)));
    });
  };

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "imp" : "all"}
        </button>
      </div>
      <div>
        <ul>
          {notesToShow.map((note, i) => (
            <Note
              key={i}
              note={note}
              toggerImportance={() => toggerImportanceOf(note.id)}
            />
          ))}
        </ul>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input value={newNote} onChange={handleNoteChange} />
          <button type="submit">Add Note</button>
        </form>
      </div>
    </div>
  );
};

export default App; */

//----------------part2 c form------------------
 import React, { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note";
import noteService from "./services/note";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNode] = useState("");
  const [showAll, setShowAll] = useState(true);

  const name = "Leevi";
  const age = 0;
  const person = {
    name: name,
    age: age,
  };

  const person1 = { name, age };

  const hook = () => {
    console.log("effect");
    noteService.getAll().then((initialNotes) => {
      setNotes(initialNotes);
    });
  };
  useEffect(hook, []);
  console.log("render", notes.length, "notes");

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  const handleNoteChange = (event) => {
    setNewNode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newNoteObj = {
      // id: notes.length + 1,
      content: newNote,
      date: new Date(),
      important: Math.random > 0.5,
    };

    noteService.create(newNoteObj).then((returnedNote) => {
      setNotes(notes.concat(returnedNote));
      setNewNode("");
    });
  };

  const toggerImportanceOf = (id) => {
    const note = notes.find((note) => note.id === id);
    const changeNote = { ...note, important: !note.important };

    noteService.update(id, changeNote).then((returnedNote) => {
      setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)));
    })
    .catch(error=>{
      alert(`the note '${note.content}' was already deleted from server`)

      setNotes(notes.filter(n=>n.id!=id));
    })
    ;
  };

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "imp" : "all"}
        </button>
      </div>
      <div>
        <ul>
          {notesToShow.map((note, i) => (
            <Note
              key={i}
              note={note}
              toggerImportance={() => toggerImportanceOf(note.id)}
            />
          ))}
        </ul>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input value={newNote} onChange={handleNoteChange} />
          <button type="submit">Add Note</button>
        </form>
      </div>
    </div>
  );
};

export default App; 


