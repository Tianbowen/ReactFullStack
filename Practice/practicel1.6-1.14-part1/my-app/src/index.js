import React, { useState } from "react";
import ReactDOM from "react-dom";

/* const Display = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Counter = ({ text, counter }) => {
  return (
    <tr>
      <td>{text} </td>
      <td>{counter}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  if (good == 0 && neutral == 0 && bad == 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  } else {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <Counter text="good" counter={good} />
            <Counter text="neutral" counter={neutral} />
            <Counter text="bad" counter={bad} />
            <Counter text="all" counter={good + neutral + bad} />
            <Counter
              text="average"
              counter={good * 1 + neutral * 0 + bad * -1}
            />
          </tbody>
        </table>
      </div>
    );
  }
};

const App = () => {
  const [good, setGood] = useState(0);

  const [neutral, setNeutral] = useState(0);

  const [bad, setBad] = useState(0);

  const getAverage = () => {};
  return (
    <div>
      <Display title="give feedback" />
      <div>
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
      </div>
      <Display title="statistics" />
      <div>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root")); */

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const App1 = (props) => {
  const [selected, setSelected] = useState(0);

  const [array, setArray] = useState(
    new Array(props.anecdotes.length+1).join("0").split("").map(parseFloat)
  );
  console.log(new Array(props.anecdotes.length+1).join("0").split("").map(parseFloat));

  const handleRandom = () => {
    var index = Math.floor(Math.random() * props.anecdotes.length);
    console.log(index);
    setSelected(index);
  };

  const handleVote = () => {
    const newArray = [...array];
    console.log('投票前：',newArray);
    newArray[selected] += 1;
    console.log('投票后：',newArray);
    setArray(newArray);
  };

  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      <p>has {array[selected]} votes</p>

      <div>
        <button onClick={() => handleVote()}>vote</button>
        <button onClick={() => handleRandom()}>next</button>
      </div>
    </div>
  );
};

ReactDOM.render(
  <App1 anecdotes={anecdotes} />,
  document.getElementById("root")
);
