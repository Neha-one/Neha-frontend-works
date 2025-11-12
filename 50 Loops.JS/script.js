//FOR  LOOP

//  let a=1;
//  for (i=1 ; i<=100 ; i++){
//     console.log(a+i);
// //  or 
// //  console.log(i)
// }

// OR

// for(i=0 ; i<10 ; i++ ){
//     console.log(i+1);
// }

//  FOR IN LOOP

let list = {
    name: "neha",
    age: 19,
    role: "programmer"
};
for (const key in list) {

    //give value to a var name : element.
    const element = list[key];

    //print only key of object-
    // console.log(key);

    // print only value of object-
    // console.log(list[key]);
    // console.log(element);

    //print both -
    console.log(key, "=", element);
}

// FOR OF LOOP

for (const letter of "NEHA") {
    console.log(letter);
};

// WHILE LOOP : important loop and oldest loop-

let x = 0;
while (x < 5) {
    console.log(x);
    x++;
};


// DO WHILE LOOP : not more usable cause complexity but have some cases were it fit directly.

// let i = 0;
// do {
//     console.log(i);
//     i++;
// }
// while (i < 5);

// it print at-least once time-

let a = 10;
do {
    console.log(a);
    a++;
}
while (a < 10);
// while(a<11);