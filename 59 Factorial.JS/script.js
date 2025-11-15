let a = 6

function factorial(number) {
    let arr = Array.from(Array(number).keys())
    //    console.log(arr.slice(1,))
    let c = arr.slice(1,).reduce((a, b) => {
        return a * b
    })
    console.log("factorial of 5 = " + c)
}
factorial(a)




//mymethode: -

function fact(num) {
    let arr = Array.from(Array(num + 1).keys())
    let c = (arr.slice(1,).reduce((a, b) => a * b))
    console.log("factorial of 5 = " + c)
}
fact(5)


//          EXPLAINATION:-


// create a var which contains fact-number
let a1 = 6;

// create a function
function fact(num) {

    //make an arrays of 5 elements
    //here Array(num+1) = Array(5+1)=Array(6)=means it will create a arrays which have 6 elements.
    //here Array(6).keys()=0,1,2,3,4,5
    //here Array.from=make that numbers in array = [0,1,2,3,4,5]
    let arr = Array.from(Array(num + 1).keys())

    //here arr.slice(1,)=slice array from index 1 to end cause 0 will make result 0. make it like = [1,2,3,4,5]
    let c = arr.slice(1,)

    //here arr.slice(1,)=c=[1,2,3,4,5]
    //it will collect result and also print that.
    console.log(c.reduce((a, b) => a * b))
}
//call the fact function with value a=5.
fact(a1)






//USING FOR LOOP:-

// let fact2 = 1;
// let n = Number(prompt("enter your number :"))
// for (let i = 1; i<= n; i++) {
//     fact2 *= i

// }
// console.log(fact2);

//USING WHILE LOOP:-

// let fact = 1;
// let n = Number(prompt("enter your number :"))
// let i = 1;
// while (i <= n) {
//     fact *= i;
//     i++;
// }
// console.log(fact);

//USING DO WHILE LOOP:-

// let fact = 1;
// let n = Number(prompt("enter your number :"))
// let i = 1;
// do {
//     fact *= i;

//     i++;
//     console.log(fact);
// }
// while (i <= n);