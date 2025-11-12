// create a variable of type string and try to add a number to it.

//we add a string with a integer so that it will called concatenation and type of result will be also a string.
let str = "neha";
let num = 8;

let result = str + num;

console.log(result);  //neha8
console.log(typeof result);   //string

//    OR
//we convert the str into integer using Number function and then add that with a number and type of result will be number.
let str1 = "10";
let num1 = 5;

let result1 = Number(str1) + num1;

console.log(result1);    //15
console.log(typeof result1);    //number

// 2. use typeof operator to find the datatype of the string in last question.

let str2 = "neha";
let num2 = 8;

let result2 = str2 + num2;

console.log(typeof result2);   //string


let str3 = "10";
let num3 = 5;

let result3 = Number(str3) + num3;

console.log(typeof result3);    //number


//  3. create a const object in javascript . Can you change it to hold a number later?

//create a object
const person = {
    name: "neha",
    age: 21
};
console.log(person);

//now try to change the object value.

// person = 100;
// console.log(person);  // ERROR   so we can not change the object value like this.


//now we try to change the key:value.
person.name = "kumari";
person.age = 22;
console.log(person);      //  YES   so we can change the key:value of const datatype.



// 4. try to add a new key to the const object in problem 3 were able to do it?
person.course = "B.Tech";
person.year = 2;
console.log(person);

// person = 3;
// console.log(person);   //NO   we are not able to change the


// 5. write a js program to create a word-meaning dicstionary of 5 words.

var dict = {
    meticulous: "a person who cares every small things.",
    convenient: "very easy to use.",
    pricisely: "accurate.",
    cosmos: "whole universe.",
    tackle: "to handle the situation."
};
console.log("word of dicstionary-" + "\n");
for (let word in dict) {
    console.log(word + ":" + dict[word]);
}
