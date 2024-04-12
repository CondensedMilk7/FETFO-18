// // concat
// const developers = ["Tato", "Grigol", "Zurab", "Avraam", "Gulnara", "Michael"];
// const designers = ["Data", "Lela", "Luka", "Vladimer"];

// const team = developers.concat("George", "Jason", "Samantha");
// // join
// const joined = developers.join("");
// // console.log("Our team members are: " + team.join(", "));

// // slice
// // const sliced = team.slice();
// // console.log(sliced);
// const teamCopy = team.slice();
// // const teamCopy = [...team];
// team.pop();
// console.log("team", team);
// console.log("teamCopy", teamCopy);

// // Shallow copy
// const array = ["Hello", "World", ["Nested", "array"]];
// const arrayCopy = structuredClone(array);
// array[2][0] = "CHANGED";
// console.log(array);
// console.log("arrayCopy", arrayCopy);

// // splice
// const spliced = team.splice(1, 3, "Nugzar", "Jemal");
// console.log(spliced);
// console.log(team);

const array = [0, 1, 2, 3, 4, 5, 6, 7, 9, 8];
let jCount = 0;
let isSorted = false;
let checkCount = 0;

do {
  let noSwapHappened = true;
  for (let j = 0; j < array.length - 1 - checkCount; j++) {
    jCount++;
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

console.log(array);
console.log(jCount);

// bubble_sort(array);

// function bubble_sort(array) {
//   let iterationCount = 0;
//   for (let i = 0; i < array.length; ++i) {
//     for (let j = 0; j < array.length - 1 - i; ++j) {
//       if (array[j] > array[j + 1]) {
//         const temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//       iterationCount++;
//     }
//   }
//   console.log(array);
//   console.log(iterationCount);
// }
