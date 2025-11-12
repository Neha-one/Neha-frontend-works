// FUNCTION-
//      EXAMPLE:-01
function person(name) {
    console.log("hey," + name + " are a nice person.");
    console.log("hey," + name + " are very inteligent.");
    console.log("hey," + name + " are a so hardworking.");
    console.log("hey," + name + " are also honest person.");
    console.log("hey," + name + " are so mature.");
}
person("neha");


//      EXAMPLE:-02

function college(course) {
    console.log("hey you are persuing " + course + " , i heared by someone.");
}
college("B.Tech");

// SUM OF NUMBERSS

//      EXAMPLE:-03

//  sum of 2 numbers-
function sum(a, b) {
    console.log(a + b);
}
sum(3, 5);

//      or
//      EXAMPLE:-04

function sum1(a, b) {
    return a + b;
}
console.log(sum1(3, 5));

// sum of 2 numbers and put that in a var , so 1st we have to write return .

//      EXAMPLE:-05

function sum2(x, y) {
    console.log(x + y);
}
result = sum2(3, 4);    // 7


//      OR
//      EXAMPLE:-06

function sum3(a, b) {
    console.log(a + b);
    return a + b
}
result = sum3(3, 5);
console.log("the sum of a and b is " + result);  // not defined without [return a+b]


//      EXAMPLE:-07

// sum of 3 numbers and one number is default .
function sum4(a, b, c = 2) {
    console.log(a + b + c);
    return a + b + c
}
sum4(5, 4)  // value of c is default .
sum4(3, 4, 5);  //but if we give it a value then given value has more precedence.
console.log("sum of 3 numbers is " + sum4(5, 4));  // we can directly print sum. without return.

//      EXAMPLE:-08
function sum5(a, b, c = 2) {
    console.log(a + b + c);
    return a + b + c
}

result1 = sum5(3, 4);
result2 = sum5(6, 4);
result3 = sum5(2, 5, 6);

console.log("the sum of these numbers is: ", result1);
console.log("the sum of these numbers is: ", result2);
console.log("the sum of these numbers is: ", result3);

// ARROW FUNCTION-
//      EXAMPLE:-09

const func1 = (x) => {
    console.log("i am an arrow function", x)
}
func1(34);
func1(45);
func1(67);

//      or
//      EXAMPLE:-10

const name = (name) => {
    console.log("i am", name)
}
name("neha")

//      EXAMPLE:-11

let fun2 = (name) => {
    console.log("hii " + name + " is a good person. ");
}

fun2("neha")
fun2("mani");
fun2("somya");
fun2("sam")

//      EXAMPLE:-12

const woman = (name) => {
    console.log("hii " + name);
}
woman("neha")
woman("maani")
woman("somya")

//      EXAMPLE:-13

const fun3 = (a, b) => {
    console.log(a + b);
}
fun3(3, 4);

//      EXAMPLE:-14

const mani = (a, b, c = 1) => {
    console.log(a + b + c);
}
mani(3, 4)