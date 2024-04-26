let myStr = "hey there";
let myNum = -123;
let myBool: boolean = false;

function greet() {
  return "hello there";
}

// myBool = greet();

const user = {
  id: 242,
  name: "John",
};

// user.id = "98";

let typescript: string = "cool";
typescript = "annoying";
const someNum: number = 12;

let fluidVar: any = "something";
fluidVar = 999;
fluidVar = true;
fluidVar = [1, 2, 3];

const myArr: string[] = ["one", "two"];
// myArr.push(0);
myArr.push("three");

function multiply(a: number, b: number): number {
  return a * b;
}

// const result = multiply(false, true);

// myArr.push(multiply(2, 3));

function log(text?: string): void {
  console.log(text);
}

const whatever = log();

type MyUnionType = string | number | { id: number };

let myVar: MyUnionType = 85;
myVar = { id: 123 };
// myVar = { name: "john" };

interface User {
  name: string;
  id: number;
  email?: string;
  addPost: () => string;
}

const someUser: User = {
  id: 123,
  name: "John",
  addPost() {
    return "new post";
  },
};

class Admin implements User {
  name: string;
  email: string;
  id: number;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
    this.id = Date.now();
  }

  addPost() {
    return "new post";
  }

  managePosts() {}
}

function saveUser(data: User) {
  // ... some save logic here
}

saveUser(someUser);

const adminUser = new Admin("Mr.Admin", "admin@admin");
saveUser(adminUser);

// Tuple
const myTuple: [number, string, boolean] = [4, "tuple", true];
// myTuple[1] = false;

const [a, b, c] = myTuple;

class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const point = new Point(14, 15);
point.x = 0;
// point.y = false;

class Hero {
  readonly name: string = "Tariel";

  constructor(otherName?: string) {
    if (otherName !== undefined) {
      this.name = otherName;
    }
  }

  // changeName() {
  //   this.name = "Avtandil";
  // }
}

const hero = new Hero();
// hero.name = "Pridon";

class Greeter {
  public greet() {
    console.log("hi");
  }

  protected getName() {
    return "hi";
  }
}

class SpecialGreeter extends Greeter {
  public howdy() {
    console.log("Howdy " +this.getName());
  }
}

const g = new SpecialGreeter();
g.greet();

class UnknownKnight {
  private name = "Tariel";
  crying = true;

  introduce() {
    return this.name;
  }
}

const someone = new UnknownKnight();
console.log(someone.crying);
console.log(someone.introduce());
// console.log(someone.name);

class King extends UnknownKnight {
  showName() {
    // console.log(this.name);
  }
}
