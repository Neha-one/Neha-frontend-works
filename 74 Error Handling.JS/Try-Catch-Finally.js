//           TRY-CATCH:-
// //      error (unexpected problems):-
// let num1 = prompt("enter 1st number");

// let num2 = prompt("enter 2nd number");

// let sum = parseInt(num1) + parseInt(num2);

// try {
//     //X is not define then try not working and move to catch.
//     console.log('sum is ', sum * X);

// } catch (error) {
//     console.log('Error!');
//     // alert(error.name)   //ReferenceError
//     // alert(error.message)    //X is not defined
//     // alert(error.stack)      //ReferenceError:X is not defined at https:127.0.01:3002/script.js:31:34

// }



//      TRY-CATCH-FINALLY:-
//  The finally block runs always — whether error happens or not

function main() {
    let num1 = prompt("enter 1st number");

    let num2 = prompt("enter 2nd number");

    let sum = parseInt(num1) + parseInt(num2);
    try {
        let x = 2;
        console.log('sum is ', sum * x);
        return true;
    }
    catch {
        console.log('Error!');
        //if we write this then single console.log("...") will not run.
        return false;
    }
    //if we only write this line then it will not run cause of return in try and catch.
    // console.log('files are being closed and db connection is being closed.');

    //this console will run cause of finally.
    finally {
        console.log('files are being closed and db connection is being closed.');
    }
}
main();

