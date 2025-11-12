//       Problem in Your Code
// prompt() always returns a string, even if the user types a number.
// Your case values are numbers (1, 2, 3…) → strict comparison (===) fails.
// So, even if the user types 1, it won’t match case 1.
//          WRONG WRONG WRONG
//          SOLUTION :- We have to make my case value string so that promt can work OTHERWISE we can also run this code using direct putting value:- " let day=3; "
// let day = prompt("enter your day-number:");      //run in browser.
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day!")
// }


//      SOLUTION
// let day = prompt("enter your day-number:");      //run in browser.
// switch (day) {
//     case "1":
//         console.log("Monday");
//         break;
//     case "2":
//         console.log("Tuesday");
//         break;
//     case "3":
//         console.log("Wednesday");
//         break;
//     case "4":
//         console.log("Thursday");
//         break;
//     case "5":
//         console.log("Friday");
//         break;
//     case "6":
//         console.log("Saturday");
//         break;
//     case "7":
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day!")
// }



//          other
let num1 = Number(prompt("enter first number:"));
let num2 = Number(prompt("enter second number:"));
let operator = prompt("enter operator(+,-,*,/,%.**)");

switch (operator) {
    case "+":
        alert(`${num1}+ ${num2} = ${num1 + num2}`);
        break;
    case "-":
        alert(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case "*":
        alert(`${num1} * ${num2}= ${num1 * num2}`);
        break;
    case "/":
        alert(`${num1} / ${num2} = ${num1 / num2}`);
        break;
    case "%":
        alert(`${num1} % ${num2} = ${num1 % num2}`);
        break;
    case "**":
        alert(`${num1} ** ${num2} = ${num1 ** num2}`);
        break;
    default:
        alert("Invalid execution!")

}


//  Other practice
let letter = prompt("enter your letter:")

switch (letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        alert(`letter ${letter} is vowel.`);
        break;
    default:
        alert(`letter ${letter} is consonant.`)
}
