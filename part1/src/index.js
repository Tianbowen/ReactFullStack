import React, { useState } from "react";
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

// ReactDOM.render(
//   React.createElement(App5, null),
//   document.getElementById("root")
// );

// part1 c

const Hello3 = (props) => {
  return (
    <div>
      <p>
        Hello {props.name},you are {props.age} years old.
      </p>
    </div>
  );
};

const App6 = () => {
  const name = "arwen";
  const age = 18;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello3 name={name} age={age} />
    </div>
  );
};

// Component helper functions 组件辅助函数

const Hello4 = ({ name2, age2 }) => {
  // const name = props.name;
  // const age = paops.age;

  // const { name1, age1 } = props;
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - age2;
  };

  return (
    <div>
      <p>
        Hello {name2},you are {name2}
      </p>
      <p>
        Hello {name2},you are {name2}
      </p>
      <p>so you were probably born in {bornYear()}</p>
    </div>
  );
};

const App7 = () => {
  const name = "arwen";
  const age = 18;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello4 name={name} age={age} />
    </div>
  );
};

let counterlet = 1;

const Counter = ({ counter }) => {
  return <div>{counter}</div>;
};

const App8 = () => {
  return (
    <div>
      <Counter counter={counterlet} />
    </div>
  );
};

// const refresh = () =>
//   ReactDOM.render(
//     React.createElement(App8, null),
//     document.getElementById("root")
//   );

// setInterval(() => {
//   refresh();
//   counterlet += 1;
// }, 1000);

// stateful component 有状态组件

// const App9 = () => {
//   const [counter, setCounter] = useState(0);

//   setTimeout(() => setCounter(counter + 1), 1000);

//   return <div>{counter}</div>;
// };

// ReactDOM.render(
//   React.createElement(App9, null),
//   document.getElementById("root")
// );

// const App10 = () => {
//   const [counter, setCounter] = useState(0);

//   const increaseByOne = () => {
//     setCounter(counter++);
//   };

//   const setToZero=()=>setCounter(0);

//   return (
//     <div>
//       <div>{counter}</div>
//       <button onClick={increaseByOne}>plus</button>
//       <button onClick={setToZero} >zero</button>
//     </div>
//   );
// };

// ReactDOM.render(<App10 />,document.getElementById('root'));

// Passing state to child components 将状态传递给子组件

// const Display = (props) => {
//   // const { counter } = props;
//   return <div>{props.counter}</div>;
// };
// const Button = (props) => {
//   return <div onClick={props.handleClick}>{props.text}</div>;
// };
// const App11 = () => {
//   const [counter, setCounter] = useState(0);

//   const increaseByOne = () => setCounter(counter + 1);
//   const decreaseByOne = () => {
//     setCounter(counter - 1);
//   };
//   const setToZero = () => {
//     setCounter(0);
//   };

//   return (
//     <div>
//       <Display counter={counter} />
//       <button onClick={increaseByOne}>plus</button>
//       <button onClick={setToZero}>zero</button>
//       <Button handleClick={increaseByOne} text="plus" />
//       <Button handleClick={decreaseByOne} text="minus" />
//       <Button handleClick={setToZero} text="zero" />
//     </div>
//   );
// };

// ReactDOM.render(<App11 />, document.getElementById("root"));

// Refactoring the components 重构组件

// const Display = ({ counter }) => <div>{counter}</div>;

// const Button = ({ handleClick, text }) => (
//   <button onClick={handleClick}>{text}</button>
// );

// const App11 = () => {
//   const [counter, setCounter] = useState(0);

//   const increaseByOne = () => setCounter(counter + 1);
//   const decreaseByOne = () => {
//     setCounter(counter - 1);
//   };
//   const setToZero = () => {
//     setCounter(0);
//   };

//   return (
//     <div>
//       <Display counter={counter} />
//       <button onClick={increaseByOne}>plus</button>
//       <button onClick={setToZero}>zero</button>
//       <Button handleClick={increaseByOne} text="plus" />
//       <Button handleClick={decreaseByOne} text="minus" />
//       <Button handleClick={setToZero} text="zero" />
//     </div>
//   );
// };

// ReactDOM.render(<App11 />, document.getElementById("root"));

// Complex state 复杂状态

/* const App12 = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  return (
    <div>
      <div>
        {left}
        <button onClick={() => setLeft(left + 1)}>left</button>
        <button onClick={() => setRight(right + 1)}>right</button>
        {right}
      </div>
    </div>
  );
};

ReactDOM.render(<App12 />,document.getElementById('root')); */

/* const App13 = () => {
  const [clicks, setClicks] = useState({ left: 0, right: 0 });

  const handleLeftClick = () => {
    const newClicks = {
      left: clicks.left + 1,
      ...clicks,
    };
    setClicks(newClicks);
  };

  const handleRightClick = () => {
    const newClicks = {
      ...clicks,
      right: clicks.right + 1,
    };
    setClicks(newClicks);
  };

  return (
    <div>
      <div>
        {clicks.left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {clicks.right}
      </div>
    </div>
  );
};

ReactDOM.render(<App13 />,document.getElementById('root')); */

// Handling arrays 处理数组

/* const App14 = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll([...allClicks,"L"]);
    setLeft(left + 1);
  };
  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };

  return (
    <div>
      <div>
        {left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {right}
        <p>{allClicks.join(' ')}</p>
      </div>
    </div>
  );
};

ReactDOM.render(<App14 />, document.getElementById("root")); */

// Conditional rendering 条件渲染

/* const History = (props) => {
  console.log("props is ", props);
  if (props.clicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }

  return <div>buttons press history :{props.clicks.join(" ")}</div>;
};

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const App15 = (props) => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [clicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll([...clicks, "L"]);
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAll([...clicks, "R"]);
    setRight(right + 1);
  };

  return (
    <div>
      <div>
        {left}
        <Button handleClick={handleLeftClick} text="left" />
        <Button handleClick={handleRightClick} text="right" />
        {right}
        <p>{clicks.join(" ")}</p>
        <History clicks={clicks} />
      </div>
    </div>
  );
};

ReactDOM.render(<App15 />, document.getElementById("root")); */

const App16 =(props)=>{
  const [value,setValue] =useState(10);

  const allSetValue=(newValue)=>{
    setValue(newValue);
  };

  return (<div>
    {value}
    <button onClick={()=>allSetValue(1000)}>set 1000</button>
    <button onClick={()=>allSetValue(0)} >set  0</button>
    <button onClick={()=>allSetValue(value+1)}>set +1</button>
  </div>);
}

ReactDOM.render(React.createElement(App16,null),document.getElementById('root'));
