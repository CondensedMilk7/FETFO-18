// const person = {
//   firstName: "John",
//   lastName: "Doe"
// }
//
// for (const key in person) {
//   console.log(key);
// }
//
// console.log("ajafsandali" in person);

// function Person(firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
// }

// const people = new Array(100);
// people.fill(new Person("John", "Doe", 23));
// const people = [
//   new Person("John", "Doe", 7),
//   new Person("Jane", "Doe", 17),
//   new Person("Robert", "Robertson", 12),
//   new Person("Raphael", "Winters", 13),
// ];
//
// const found = people.find((person) => person.age > 30);
// const foundIndex = people.findIndex((p) => p.age < 20);
//
// console.log(found);
// console.log(foundIndex);
//
// function findAdults(people) {
//   const adults = people.filter((person) => person.age >= 18);
//   return adults.length > 0 ? adults : null;
// }
//
// const findResult = findAdults(people);
// console.log(findResult);

// Dates
const currentDate = new Date();
console.log(currentDate);

// Constructing
//
// ISO DATE STRING: YYYY-MM-DDTHH:mm:ss.sss
// const date = new Date('2000-06-07T13:32:45');
// const date = new Date(2000, 5, 7, 13, 32, 45, 392);
// const date = new Date(49191942992922);
// console.log(date);

// Formatting
// const date = new Date();
// console.log(date.toString());
// console.log(date.toLocaleString());
// console.log(date.toLocaleDateString());
// console.log(date.toUTCString());
// console.log(date.toISOString());

// 22 of March, 2024
function getFormatedDate(date) {}

const d = new Date();
const year = d.getFullYear();
console.log(year);
const dayOfMonth = d.getDate();
console.log(dayOfMonth);
const month = d.getMonth();
console.log(month);

const dateA = new Date(2023, 2, 12);
const dateB = new Date(2024, 0, 12);

const difference = dateA - dateB;

console.log(dateA.getDate() === dateB.getDate());

function isSameDay(dateA, dateB) {
  return (
    dateA.getFullYear() === dateB.getFullYear() &&
    dateA.getMonth() === dateB.getMonth() &&
    dateA.getDate() === dateB.getDate()
  );
}

console.log(isSameDay(new Date(2024, 2, 12, 13), new Date(2024, 2, 12, 18)));
