//              ERROR-HANDLING:-
//      when show error - example:-
// let a = prompt("enter 1st number");

// let b = prompt("enter 2nd number");

// //  it will show error cause prompt take numbers like string.
// let sum=a+b;
// console.log('sum is ' , sum);       //a=5, b=7 , sum is 57



//      solve error :-
// let a = prompt("enter 1st number");

// let b = prompt("enter 2nd number");

// let sum=parseInt(a)+parseInt(b)

// console.log('sum is ' , sum);       //a=5, b=7 , sum is 12



//          doesn't show error :-   NaN case - example:-
// if a=ne , b=ha then :- sum is  NaN    (it doesn't show error)

// let a = prompt("enter 1st number");

// let b = prompt("enter 2nd number");

// let sum = parseInt(a) + parseInt(b)

// console.log('sum is ', sum);



//      throw a error by user:-
// // check for NaN is "isNaN()"

// let a = prompt("enter 1st number");

// let b = prompt("enter 2nd number");

// let sum = parseInt(a) + parseInt(b)

// //show a syntax error if you enter wrong data:-
// if (isNaN(a) || isNaN(b)) {
//     throw SyntaxError("Sorry this is not allowed!")
// }
// console.log('sum is ', sum); 
