//      var data type
var a = "1"
var b = 6;
var c = "neha"
console.log(a + b)

console.log(a + b + 5)
console.log(typeof a, typeof b, typeof c)

if (typeof a === "number") {
    console.log("a is number")
}
else {
    console.log("a is not a number! ")
}
//       let data type
let a1 = 5;
let b1 = 6;
// let 55c="neha" //NOt allowed


// let is a block data type. 
{
    let a = 66;
    console.log(a)
}

console.log(a)  //1 from top value of a .


//       const data type
const a2 = "4"
const b2 = 8;
const c2 = "mani"

// const a2=a2+1;   //NOt allowed
console.log(a2)


//       all data types
let x = "neha";
let y = 21;
let z = 3.35;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)


//    object:-  key-value pair
let o = {
    name: "neha",
    "age of neha": 21,
    "is_honest": true
}

console.log(o);

// // add other key-value pair

o.salary = "2lakh"
console.log(o);