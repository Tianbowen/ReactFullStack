// variables
const x = 1;
let y = 5;

console.log(x, y);
y += x;
console.log(x, y);
y = "sometext";
console.log(x, y);
// array
const t = [1, -2, 3];
t.push(5);

console.log(t.length);
console.log(t[1]);

t.forEach((value) => {
  console.log(value);
});

const t1 = [0, -1, 2];
const t2 = t1.concat(5);
console.log(t1);
console.log(t2);

const t3 = [1, 2, 3];
var t4 = t3.map((value) => {
  return value * 2;
});

console.log(t3);
console.log(t4);

const t5 = [1, 2, 3];
const [temp1, temp2, temp3] = t5;
console.log(t5);
console.log(temp3);
// object
const object1 = {
  name: "ar",
  age: 20,
  grades: [1, 2, 3, 4],
  department: "Stanford",
};

console.log(object1.name);
const ageName = "age";
console.log(object1[ageName]);

object1.address = "Shen zhen";
console.log(object1["address"]);

// functions

const sum = (p1, p2) => {
  console.log(p1, p2);
  return p1 + p2;
};

let sumResult = sum(1, 2);
console.log(sumResult);

const square = (p) => {
  console.log(p);
  return p * p;
};
let squareResult = square(2);
console.log(squareResult);

const square1 = (p) => p * p;
console.log(square1(4));

function product(a, b) {
  return a * b;
}

const result = product(2, 4);

// object methods and 'this'
const arto={
  name:'arwen',
  age:10,
  growOlder:function()
  {
    console.log('hello ,my name is '+this.name);
  },
  doAddition:function(a,b)
  {
    console.log(a+b);
  }  
}

arto.growOlder();
console.log(arto.age);
arto.growOlder=function()
{
  this.age+=1;
  console.log('my name is '+this.name+',age is '+this.age);
}
arto.growOlder();

arto.doAddition(1,3);
const referenceToAddition=arto.doAddition;
referenceToAddition(10,15);


const arto1={
  name:'arwen',
  greet:function()
  {
  console.log('hello, my name is '+this.name);
}
}

setTimeout(arto1.greet,1000);

setTimeout(arto1.greet.bind(arto1),1000);
// classes
class Person{
  constructor(name,age)
  {
    this.name=name;
    this.age=age;
  }
  
  greet(){
    console.log('class: Hello,my name is '+this.name);
  }
}

const adam=new Person('arwen',20);
adam.greet();

// javascript materials





































