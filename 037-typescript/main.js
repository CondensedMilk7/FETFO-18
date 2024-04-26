"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myStr = "hey there";
var myNum = -123;
var myBool = false;
function greet() {
    return "hello there";
}
var user = {
    id: 242,
    name: "John",
};
var typescript = "cool";
typescript = "annoying";
var someNum = 12;
var fluidVar = "something";
fluidVar = 999;
fluidVar = true;
fluidVar = [1, 2, 3];
var myArr = ["one", "two"];
myArr.push("three");
function multiply(a, b) {
    return a * b;
}
function log(text) {
    console.log(text);
}
var whatever = log();
var myVar = 85;
myVar = { id: 123 };
var someUser = {
    id: 123,
    name: "John",
    addPost: function () {
        return "new post";
    },
};
var Admin = (function () {
    function Admin(name, email) {
        this.name = name;
        this.email = email;
        this.id = Date.now();
    }
    Admin.prototype.addPost = function () {
        return "new post";
    };
    Admin.prototype.managePosts = function () { };
    return Admin;
}());
function saveUser(data) {
}
saveUser(someUser);
var adminUser = new Admin("Mr.Admin", "admin@admin");
saveUser(adminUser);
var myTuple = [4, "tuple", true];
var a = myTuple[0], b = myTuple[1], c = myTuple[2];
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var point = new Point(14, 15);
point.x = 0;
var Hero = (function () {
    function Hero(otherName) {
        this.name = "Tariel";
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }
    return Hero;
}());
var hero = new Hero();
var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function () {
        console.log("hi");
    };
    Greeter.prototype.getName = function () {
        return "hi";
    };
    return Greeter;
}());
var SpecialGreeter = (function (_super) {
    __extends(SpecialGreeter, _super);
    function SpecialGreeter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpecialGreeter.prototype.howdy = function () {
        console.log("Howdy " + this.getName());
    };
    return SpecialGreeter;
}(Greeter));
var g = new SpecialGreeter();
g.greet();
var UnknownKnight = (function () {
    function UnknownKnight() {
        this.name = "Tariel";
        this.crying = true;
    }
    UnknownKnight.prototype.introduce = function () {
        return this.name;
    };
    return UnknownKnight;
}());
var someone = new UnknownKnight();
console.log(someone.crying);
