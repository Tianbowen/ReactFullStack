import React from "react";
import ReactDOM from "react-dom";

const App = () => (
  <div>
    <p>Hello world</p>
  </div>
);

const App1 = () => {
  console.log("Hello from component");
  return (
    <div>
      <p>Hello world 2</p>
    </div>
  );
};

const App2 = () => {
  const now = new Date();
  const a = 10;
  const b = 20;

  return (
    <div>
      <p>Hello world,it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  );
};

const Hello = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  );
};

const App3 = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
      <Hello />
      <Hello />
      <Hello />
    </div>
  );
};

const Hello1 = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  );
};

const App4 = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello1 name="George" />
      <Hello1 name="Daisy" />
    </div>
  );
};

const Hello2 = (props) => {
  return (
    <div>
      <p>
        Hello {props.name} ,you are {props.age} years old
      </p>
    </div>
  );
};

const App5 = () => {
  const name = "Peter";
  const age = 18;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello2 name={name} age={age} />
    </div>
  );
};

// ReactDOM.render(<App2 />, document.getElementById('root'));
// ReactDOM.render(React.createElement(App2, null), document.getElementById('root'));
// ReactDOM.render(
//   React.createElement(App3, null),
//   document.getElementById("root")
// );

// ReactDOM.render(
//   React.createElement(App4, null),
//   document.getElementById("root")
// );

ReactDOM.render(
  React.createElement(App5, null),
  document.getElementById("root")
);
