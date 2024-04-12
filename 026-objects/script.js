const someValue = "John";
const someObject = {
  firstName: someValue,
  lastName: "Doe",
  age: 43,
  married: false,
  hobbies: ["Swimming", "Tennis", "Fishing"],
  greet: function () {
    console.log("Hello");
  },
};
console.log(someObject);

const objectCopy = { ...someObject };
objectCopy.age = 200;
objectCopy.hobbies[1] = "Piano";
// console.log("original", someObject);
// console.log("copy", objectCopy);

// console.log(someObject);
// console.log(someObject.firstName);
// someObject.greet();

const array = [1, 2, 3, 4, 5];
const arrayAlt = {
  0: 1,
  1: 2,
  2: 3,
};
// Nope
// for (let num of arrayAlt) {
//   console.log(num);
// }
const someName = "Jane";
const someNum = 5;

// console.log(typeof array);

const person = {
  firstName: "Alice",
  lastName: "Smith",
  job: {
    title: "Senior Product Designer",
  },
};

const key = "firstName";
// console.log(person[key]);
// console.log(person.job.title);
// console.log(person["job"]["title"]);

const person2 = {
  firstName: "Will",
  lastName: "Smith",
  job: {
    title: "Actor",
    description: "Keep my wife's out of your mouth.",
  },
  greet() {
    console.log(`Hi, mi name is ${this.firstName}`);
  },
};

// person2.greet();

function createPerson(name, surname) {
  return {
    firstName: name,
    lastName: surname,
    greet() {
      console.log(this);
      console.log(`Hi, my name is ${this.firstName}`);
    },
  };
}

const person3 = createPerson("John", "Doe");
// person3.greet();

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.greet = function () {
    console.log(
      `Hi, my name is ${this.firstName} ${this.lastName}. I am ${this.age} years old.`
    );
  };
}

const james = new Person("James", "Brown", 80);
// james.greet();

const people = [
  new Person("John", "Doe", 19),
  new Person("Jane", "Johnson", 25),
  new Person("William", "Willson", 16),
  new Person("Albert", "Morrison", 63),
  new Person("Joey", "Jordison", 33),
];

console.log(people);

// const numbers = [3, 4, 6, 5, 1, 2];
// console.log(numbers.sort((a, b) => a - b));

function bubbleSort(array) {
  let checkCount = 0;
  do {
    let noSwapHappened = true;
    for (let j = 0; j < array.length - 1 - checkCount; j++) {
      if (array[j].age > array[j + 1].age) {
        // swap
        const currentPerson = array[j];
        array[j] = array[j + 1];
        array[j + 1] = currentPerson;
        noSwapHappened = false;
      }
    }
    checkCount++;
    isSorted = noSwapHappened;
  } while (!isSorted);
}

// bubbleSort(people);
people.sort((a, b) => a.age - b.age);
console.log(people);

const names = people.map((person) => person.firstName);

console.log(names);

const weirdObject = {
  name: "Hey",
  size: 1000,
  exists: false,
  defined: undefined,
  subObject: {
    someProp: "yes",
    another: "no",
    moreNesting: {
      why: "whatever",
    },
  },
  why: function () {
    return "because";
  },
};

/* const keys = Object.keys(weirdObject);
keys.forEach((key) => {
  console.log(weirdObject[key]);
}) */

function traverseObject(object) {
  const keys = Object.keys(object);
  for (const key of keys) {
    const value = object[key];
    if (typeof value === "object") {
      traverseObject(value);
    } else {
      console.log(value);
    }
  }
}

traverseObject(weirdObject);
