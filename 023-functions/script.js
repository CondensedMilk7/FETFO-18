// Functions

/*
    ერთგან დეკლარირებული კონფიგურირებადი კოდის ბლოკი,
    რომელიც შეგვიძლია, რომ ბევრჯერ გამოვიყენოთ.

    - მრავალჯერადად გამოყენებადი
    - შეიძლება მონაცემების მიწოდება
    - მონაცემებს აბრუნებს 
*/
// Impure function
function randomRGB() {
  const r = randomNumber(255);
  const g = randomNumber(255);
  const b = randomNumber(255);

  return `rgb(${r}, ${g}, ${b})`;
}

// Pure function
function randomNumber(max, min = 0) {
  if (typeof max !== "number" || typeof min !== "number") {
    throw new Error("expected max number argument");
  }
  return Math.round(Math.random() * (max - min + 1)) + min;
}

const randColor = randomRGB();
const randNum = randomNumber(100, 90);
console.log(randColor, randNum);

function add(...numbers) {
  let result = 0;
  for (const number of numbers) {
    result += number;
  }
  return result;
}

console.log(add(1, 2, 3, 4));
const numbers = [1, 2, 3, 4, 5];
console.log(add(...numbers));

function bubbleSort(array) {
  let checkCount = 0;
  do {
    let noSwapHappened = true;
    for (let j = 0; j < array.length - 1 - checkCount; j++) {
      if (array[j] > array[j + 1]) {
        // swap
        const currentNum = array[j];
        array[j] = array[j + 1];
        array[j + 1] = currentNum;
        noSwapHappened = false;
      }
    }
    checkCount++;
    isSorted = noSwapHappened;
  } while (!isSorted);
}

const someNumbers = [4, 3, 2, 1];
bubbleSort(someNumbers);
console.log(someNumbers);

// Arrow function
// const add = (num1, num2) => {
//   return num1 + num2;
// };

// const add = function (num1, num2) {
//   return num1 + num2;
// };

function countToZero(num) {
  console.log(num);
  if (num <= 0) return;
  countToZero(num - 1);
}

countToZero(100);

//  1, 2, 3, 5, 8, 13, 21, 34
function fibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

console.log(fibonacci(6));

// const sentence = "Hello there fellow developers";
// console.log(sentence.split(" "));
