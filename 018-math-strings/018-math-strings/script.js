// const genre = prompt("Your favorite music genre");

// switch (genre) {
//   case "pop":
//     alert("Kinda basic");
//     break;
//   case "rock":
//   case "heavy metal":
//   case "death metal":
//     alert("Good for you");
//     break;
//   case "jazz":
//     alert("Ya like jazz?");
//     break;
// }

// const operator = prompt("operator");

/* switch (operator) {
  case "+":
    2 + 2;
    break;
  case "-":
    2 - 2;
    break;
  case "/":
    2 / 2;
    break;
}
 */

/* const num1 = prompt("number 1");
const operator = prompt("operator");
const num2 = prompt("number 2");

const operation = `${num1} ${operator} ${num2}`; // 3 / 2

console.log(eval(operation));
 */

// Math

const powResult = Math.pow(5, 2);
// console.log(powResult);

const squareRoot = Math.sqrt(powResult);
// console.log(squareRoot);

const randomNum = Math.random() * 6;
// const roundedNum = Math.round(randomNum);
// const roundedNum = Math.floor(randomNum);
const roundedNum = Math.ceil(randomNum);
console.log(roundedNum);

// Strings

const message = "      Hello world!        ";

console.log(`There are ${message.length} characters in "${message.trim()}"`);
// console.log(message.toUpperCase());
console.log(message.toLowerCase());

console.log(message.trim().concat(" How are you?"));

const people = ["Jemal", "Jumber", "Juzepe", "Jimi"];
// console.log(people[3]);

console.log(message.trim().charAt(8));
// console.log(message.search("world"));
//
const newMessage =
  "Hello world, this world is very nice, I like this world very much";
// console.log(newMessage.replaceAll("world", "cat"));
console.log(newMessage);

const sentence = "This sentence is very short.";
const randomIndex = Math.floor(Math.random() * sentence.length);
const charToReplace = sentence.charAt(randomIndex);
console.log(sentence.replaceAll(charToReplace, "$"));

console.log(sentence.includes("is"));
