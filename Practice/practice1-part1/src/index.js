import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const title = "Student";

  const name = "arweb";
  const age = 19;

  const class1 = "yuwen";
  const fenshu1 = 30;

  const class2 = "yingyu";
  const fenshu2 = 40;

  return (
    <div>
      <h1>Student</h1>
      <p>
        name:{name} ,age is {age}
      </p>
      <p>
        class:{class1} ,fen is {fenshu1}
      </p>
      <p>
        class:{class2} ,fen is {fenshu2}
      </p>
      <p>total:{fenshu1 + fenshu2}</p>
    </div>
  );
};

const Header = (props) => {
  return <h1>{props.title}</h1>;
};

const Content = (props) => {
  return (
    <p>
      class : {props.classname} ,fen is:{props.fenshu}
    </p>
  );
};

const Total = (props) => {
  return <p>total fenshu:{props.totalfen}</p>;
};

const App1 = () => {
  const title = "Student";

  const name = "arweb";
  const age = 19;

  const class1 = "yuwen";
  const fenshu1 = 30;

  const class2 = "yingyu";
  const fenshu2 = 40;

  return (
    <div>
      <Header title={title} />
      <Content classname={class1} fenshu={fenshu1} />
      <Content classname={class2} fenshu={fenshu2} />
      <Total totalfen={fenshu1 + fenshu2} />
    </div>
  );
};

const App2 = () => {
  const title = "Student App2";

  const student1 = {
    name: "arwen1",
    age: 10,
  };

  const student2 = {
    name: "arwen2",
    age: 20,
  };

  const student3 = {
    name: "arwen3",
    age: 20,
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>
        student name:{student1.name},age is {student1.age}
      </p>
      <p>
        student name:{student2.name},age is {student2.age}
      </p>
      <p>
        student name:{student3.name},age is {student3.age}
      </p>
    </div>
  );
};

const Header1 = (props) => {
  return <h1>props.title</h1>;
};

const Content1 = (props) => {
  return (
    <p>
      student name:{props.name},age is {props.age}
    </p>
  );
};

const App3 = () => {
  const title = "Student App3";

  const studentAll = [
    {
      name: "arwen1",
      age: 10,
    },
    {
      name: "arwen2",
      age: 20,
    },
    {
      name: "arwen3",
      age: 20,
    },
  ];

  return (
    <div>
      <Header1 title={title} />
      <Content1 name={studentAll[0].name} age={studentAll[0].age} />
      <Content1 name={studentAll[1].name} age={studentAll[1].age} />
      <Content1 name={studentAll[2].name} age={studentAll[2].age} />
    </div>
  );
};

ReactDOM.render(
  React.createElement(App3, null),
  document.getElementById("root")
);
