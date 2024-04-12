// Loop

// While loop
let count = 0;
while (count < 10) {
  //   console.log(count);
  count++;
}

// console.log("done!");

/* let index = 0;
while (someString.charAt(999) !== "a" && index < someString.length - 1) {
  index++;
}

console.log("Found 'a' at index " + index); */

// For loop
/* for (let i = 0; i < 12; i++) {
  console.log(i);
}
 */
// const someString = "This is a sentence with a word";
// const charToFind = "a";

// let foundIndex = -1;

// for (let i = 0; i < someString.length; i++) {
//   if (someString.charAt(i) === charToFind) {
//     foundIndex = i;
//     break;
//   }

//   console.log(i, someString.charAt(i));
// }

// if (foundIndex >= 0) {
//   console.log("Found 'a' at index " + foundIndex);
// } else {
// }

// for (let i = 0; i < someString.length; i++) {
//   if (someString.charAt(i) === "a") {
//     console.log("Found 'a' at " + i);
//   }
// }

// const sentence = "This is a long sentence with many words";

/* for (let i = 100; i >= 0; i -= 3) {
  console.log(i);
 */

const randomNum = Math.round(Math.random() * (100 - 2) + 2);

let perfectDivision = 0;
for (let i = 1; i <= randomNum; i++) {
  if (randomNum % i === 0) {
    perfectDivision++;
  }
}

if (perfectDivision === 2) {
  console.log(randomNum + " არის მარტივი რიცხვი");
} else {
  console.log(randomNum + " არ არის მარტივი რიცხვი");
}
