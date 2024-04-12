// var
// let
// const

const number = 1; // number
let experienceYears = -3.25234523486; // (floating point) number
const firstName = "Pridon"; // string
const isDeveloper = true; // boolean
const isHappy = false; // boolean
let budget;

// var something = "hello"; BAD

console.log(budget);

console.log(experienceYears);

experienceYears = "Something else";

console.log(experienceYears);

console.log(number);
console.log(firstName);
console.log(isDeveloper);

budget = 100;

console.log(budget);

// Array
const names = ["Vladimer", "Gulnara", "Data", "Miqael"];

console.log(names);

// Object
const person = {
  firstName: "Pridon",
  lastName: "Tetradze",
  age: 23,
  employed: true,
};

console.log(typeof person);
console.log(person.firstName);
console.log(person.age);

console.log(typeof null);

const num1 = 13;
const num2 = 7;

const subtraction = num1 - 3;
console.log(subtraction);
console.log(num1 - num2);
console.log(num1 + num2);
console.log(num1 / num2);
console.log(num1 * num2);
console.log(num1 % num2);

console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 == num2);
console.log(num1 == 13);
console.log(7 === "7");
console.log(num1 >= 13);
console.log(num1 <= 12);

console.log("13" + 12 + 99);

const string1 = "Hello";
const string2 = "World";

console.log(string1 + " " + string2);

console.log("ABC" / 13);

console.log(num1 / 3 > 2);

console.log((15 + 2) * 2);

const someNumber = 16;
const isEven = someNumber % 2 === 0;
const isOdd = someNumber % 2 !== 0;
console.log(isEven);
