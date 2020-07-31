import React, { useState } from "react";
import ReactDOM from "react-dom";
// import App from "./App";
// import Note from "./components/Note";
// import axios from "axios";

import AppPerson from "./AppPerson";

/* const notes = [
  { id: 1, content: "Html", date: "2020-01-01 12:00:00", important: true },
  {
    id: 2,
    content: "Javascript",
    date: "2020-01-02 12:00:00",
    important: true,
  },
  { id: 3, content: "Css", date: "2020-01-03 12:00:00", important: false },
]; */

/* const App = (props) => {
  const { notes } = props;

  const result = notes.map((x) => x.id);

  console.log(result);

  // {notes.map((note) => (
  //   <li key={note.id}>{note.content}</li>
  // ))}
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note, i) => (
          <li key={i}>{note.content}</li>
        ))}
      </ul>
    </div>
  );
};

ReactDOM.render(<App notes={notes} />, document.getElementById("root")); */

/* const Note = ({ note }) => {
  return <li>{note.content}</li>;
};

const App1 = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
    </div>
  );
};

ReactDOM.render(
 <App1 notes={notes} />,
  document.getElementById("root")
); */

// ReactDOM.render(<App notes={notes} />, document.getElementById("root"));

// Exercises 2.1-2.5

/* const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Part = ({ part }) => {
  return (
    <li>
      {part.name} {part.exercises}
    </li>
  );
};

const Content = ({ parts }) => {
  return (
    <ul>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </ul>
  );
};

const Total = ({ parts }) => {
  console.log(parts);
  return (
    <h3>
      total of{" "}
      {parts.reduce((prev, cur) => {
        return prev + cur.exercises;
      }, 0)}
    </h3>
  );
};

const CourseChild = ({ cou }) => {
  return (
    <div>
      <Header name={cou.name} />
      <Content parts={cou.parts} />
      <Total parts={cou.parts} />
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      {course.map((cou) => (
        <CourseChild cou={cou} />
      ))}
    </div>
  );
};

const App = () => {
  const course = [
    {
      id: 1,
      name: "Half Stack application development",
      parts: [
        { name: "Fundamentals of React", exercises: 10, id: 1 },
        { name: "Using props to pass data", exercises: 7, id: 2 },
        { name: "State of a component", exercises: 14, id: 3 },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return <Course course={course} />;
};

ReactDOM.render(<App />, document.getElementById("root"));
 */

//-------------------part2 b form -------

//  const App3=(props)=>{

//    const {notes,setNotes} =useState(props.notes);

//    return (<div>
//      <h1>Notes</h1>
//      <ul>
//        {notes.map(note=><Note key={note.id} note={note} />)}
//      </ul>
//    </div>);
//  }

//  ReactDOM.render(<App notes={notes} />,document.getElementById('root'));

//-------------------Exercises 2.6-2.10-------------

/* const promise = axios.get("http://localhost:3001/notes").then((response) => {
  const notes = response.data;
  console.log(notes);
});
console.log(promise);

const promise1 = axios.get("http://localhost:3001/foobar");
console.log(promise1);

const promise2 = axios
  .get("http://localhost:3001/phonebooks")
  .then((response) => {
    const phonebooks = response.data;
    ReactDOM.render(
      <App phonebooks={phonebooks} />,
      document.getElementById("root")
    );
  });
 */
//const phonebooks = [{ id: 1, name: "Arto Hellas", number: "123456" }];
import App from './App'
ReactDOM.render(<App />,document.getElementById('root'));

//-------------------Exercises 2.11.-2.14 ----------------

//ReactDOM.render(<AppPerson />,document.getElementById('root'));

//-------------------Exercises 2.15.-2.18 ----------------

//import AppPhonebook from "./AppPhonebook";

//ReactDOM.render(<AppPhonebook />, document.getElementById("root"));
