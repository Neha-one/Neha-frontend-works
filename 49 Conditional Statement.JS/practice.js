// //1.Use logical operators to find whether the age of a person lies between 10 and 20?
let age = prompt("enter your age")
let checkage = (age >= 10 && age <= 20) ? ("Yes! the age lies between 10 and 20.") : ("No! the age does not lie between 10 and 20.")
alert(checkage)

// //2.Domenstrate the use of Switch case statements in JavaScript.

let day = prompt("enter your day-number:");      //run in browser.
switch (day) {
    case "1":
        console.log("Monday");
        break;
    case "2":
        console.log("Tuesday");
        break;
    case "3":
        console.log("Wednesday");
        break;
    case "4":
        console.log("Thursday");
        break;
    case "5":
        console.log("Friday");
        break;
    case "6":
        console.log("Saturday");
        break;
    case "7":
        console.log("Sunday");
        break;
    default:
        alert("Invalid day!")
}

// //3.Write a JavaScript program to find whether a number is Divisible by 2 and 3.

let number = Number(prompt("enter your number:"));

if (number % 2 == 0 && number % 3 == 0) {
    alert(`Yes! number ${number} is divisible by both 2 and 3.`)
}
else {
    alert(`No! number ${number} is not divisible by both 2 and 3.`)
}


//4.Write a JavaScript program to find whether a number is Divisible by either 2 or 3.

let number1 = Number(prompt("enter your number1:"));

if (number1 % 2 == 0 || number1 % 3 == 0) {
    alert(`Yes! number ${number1} is divisible by either 2 or 3.`)
    if (number1 % 2 == 0 && number1 % 3 != 0) {
        alert("and this is divisible by 2.")
    }
    else if (number1 % 3 == 0 && number1 % 2 != 0) {
        alert("and it is divisible by 3")
    }
    else {
        alert("it is divisible by both 2 and 3.")
    }
}
else {
    alert(`No! number ${number1} is not divisible by either 2 or 3.`)
}

