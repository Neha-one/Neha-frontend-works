//       Conditional Statement

// Example:-01
let age = 16;

if (age > 18) {
    console.log("you can drive");
}
else {
    console.log("you can not drive");
}

// Example:-02

let age1 = 12;
let grace = 7;

if ((age1 + grace) > 18) {
    console.log("you can drive")
}
else {
    console.log("you can not drive")
}

//      Operators:-
// Example:-03

let x = 5;
let y = 2;

console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x ** y)
console.log(x % y)

//compound assignment operator:-
x += y;
console.log(x)

//      Ternary Operator:-
// Example:-04

let a = 6;
let b = 8;

let c = a > b ? (a - b) : (a + b);
console.log(c)

// Example:-05
let a1 = 15;
let b1 = 8;
let c1 = a1 > b1 ? ("you are right bro") : ("no! you are wrong");
console.log(c1);


// Example:-06
let age2 = prompt("enter age2")
if (age2 > 0 && age2 < 10) {
    console.log("valid age")
}
else if (age2 < 15 && age2 > 10) {
    console.log("a kid")
}
else if (age2 > 15 && age2 < 18) {
    console.log("a tenager")
}
else {
    console.log("an adult")
}