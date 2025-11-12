//                 --- STRING ---
//  string is immutable
console.log("This is strings tutorial");

//          EXAMPLE:-01

let name = "Neha";
console.log(name[0]); // index start from 0.
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);  // undefined : forgiving language.

console.log(name.length);  //length is a property   4

//          EXAMPLE:-02

let real_name = "Mani";
let local_name = "Somya";
console.log("Her real name is " + real_name + " and her local name is " + local_name);


//         TEMPLATE LITERALS:- easy for use for developers

//          EXAMPLE:-03

console.log(`Her real name is ${real_name} and her local name is ${local_name}`);


//          EXAMPLE:-04

let name1 = "neha'kumari";
console.log(name1)

// OR   ESCAPE SEQUENCE CHARACTERS 

let name2 = "neha\'kumari"
console.log(name2);


//          EXAMPLE:-05

let b = "somya"; //[ s=0 | o=1 | m=2 | y=3 | a=4 ]
let a = "mani";

console.log(b.toUpperCase());   //SOMYA
console.log(b.toLowerCase());   //somya
console.log(b.length);  //5
console.log(b.slice(1, 4));  //omy    1 included but 4 is not.
console.log(b.slice(1));    //omya
console.log(b.replace("om", "9"));  //s9ya

console.log(b.concat(a));   //somyamani
console.log(b.concat(a, "good", "woman"));  //somyamanigoodwoman

console.log(b.charAt(3));  //y
console.log(b.indexOf("om"));   // 1
console.log(b.startsWith("so"));  //true

//          EXAMPLE:-06

let name5 = "  kumari";
let newname = name5.trim();
console.log(newname);