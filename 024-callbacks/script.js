// Callbacks

// function repeat(repCount, callback) {
//   for (let i = 0; i < repCount; i++) {
//     callback();
//   }
// }

// repeat(3, () => {
//   console.log("hello");
// });

/* function forEach(array, callbackFn) {
  for (let i = 0; i < array.length; i++) {
    callbackFn(array[i], i);
  }
}

const array = [1, 2, 3];

forEach(array, (item, index) => {
  if (index !== 0) {
    console.log(item * 2);
  }
});

const triples = [];
forEach(array, (i) => {
  triples.push(i * 3);
});

console.log(triples);
 */

/* function filter(array, filterFn) {
  const filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    if (filterFn(array[i], i)) {
      filteredArray.push(array[i]);
    }
  }

  return filteredArray;
}

const array = ["Joe", "George", "Max", "Julia"];
const filtered = filter(array, (item) => {
  return item.startsWith("J");
});
console.log(filtered); // ["Joe", "Julia"]

console.log(filter(array, (item) => !item.startsWith("J")));

const everySecond = filter(array, (item, index) => index % 2 !== 0);

console.log(everySecond);

function some(array, callbackFn) {
  for (let i = 0; i < array.length; i++) {
    if (callbackFn(array[i])) {
      return true;
    }
  }
  return false;
}

const atLeastOneJ = some(array, (item) => item.startsWith("J"));
console.log(atLeastOneJ) */

const array = ["One", "Two", "three", "Four", 0];

const filtered = array.filter((item) => item.length === 3);
console.log(filtered);

const allStringArray = array.every((item) => typeof item === "string");
console.log(allStringArray);

const hasAtLeastOneNumber = array.some((item) => typeof item === "number");
console.log(hasAtLeastOneNumber);

/* array.forEach((item, index, arr) => {
  console.log(item, index, arr);
}) */

const mapped = array.map((item, index) => item + index);
console.log(mapped);

const abomination = array
  .filter((item) => item.length < 4)
  .map((item, index) => item + index);

console.log(abomination);

let words = ["pass", "pass", "fail", "pass", "fail", "fail", "pass"];
words = words.filter((word) => word !== "fail");

console.log(words);
