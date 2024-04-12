// 5! = 1 * 2 * 3 * 4 * 5

// const number = 5;

// let result = 1;

// for (let i = 1; i <= number; i++) {
//   result *= i;
// }

// console.log(result);

// Array

// const number = [1, 2, 3, 6, 4, 3];
// const mixed = [
//   true,
//   number,
//   4,
//   "hello",
//   { name: "hello" },
//   [1, 2, 3],
//   function () {},
// ];
// console.log(mixed);

const developers = [
  "Data",
  "Gulnara",
  "Tato",
  "Grigol",
  "Lela",
  "Avraam",
  "Vladimer",
];
// const dev4 = developers[4];
developers[2] = "Vakhtang";
// developers = "something new"; // not with const...
// console.log(developers[2]);

// for (let i = 0; i < developers.length; i++) {
//   console.log(developers[i]);
// }

// developers.push("Luka");
// developers.unshift("Zurab");
// const result = developers.shift();
// const result = developers.pop();
// console.log(result);

// const dighomi = [];

// dighomi[0] = "vigaca";
// dighomi[100] = "kidev vigac";

/* const numbers = [];

for (let i = 0; i <= 100; i++) {
  numbers.push(i);
}

console.log(numbers); */

// document.write("<h1>Hello</h1>");
/*
    <ul>
        <li>name</li>
    </ul>
*/

// let list = "";

// for (let i = 0; i < developers.length; i++) {
//   list += `<li>${developers[i]}</li>`;
// }

// document.write(`<ul>${list}</ul>`);

const primeNumbers = [];

for (let i = 2; i <= 100; ++i) {
  const number = i;

  let divisions = 0;

  for (let j = 1; j <= number; ++j) {
    if (number % j === 0) {
      divisions++;
    }
    // თუ გამყოფები 2-ზე მეტია, მეტი შემოწმება აღარ გვინდა
    if (divisions > 2) {
      break;
    }
  }

  const isPrime = divisions === 2;

  if (isPrime) {
    primeNumbers.push(number);
  }
}

console.log(primeNumbers);

// const number = 18;

// let divisions = 0;

// for (let i = 1; i <= number; i++) {
//   if (number % i === 0) {
//     divisions++;
//   }
// }

// const isPrime = divisions === 2;
// console.log(isPrime);
