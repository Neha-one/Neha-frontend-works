let arr = [1, 2, 3, 4, 5, 6]
let newArr = []
for (let index = 0; index < arr.length; index++) {
    const element = arr[index]
    newArr.push(element ** 2)
}
console.log(newArr)     //[ 1, 4, 9, 16, 25, 36 ]


//          MAP
// shortcut-for printing new array with help of existing array:-
let newArr1 = arr.map((e) => {
    return e ** 2
})
console.log(newArr1)      //[ 1, 4, 9, 16, 25, 36 ]


// This callback function has three parameters:
// e → the current element (just like before).
// index → the position of that element in the array (starts from 0).
// array → the original array itself (arr).

//using Math.pow()
let newArr2 = arr.map(e => {
    return Math.pow(e, 2)
})
console.log(newArr2)      //[ 1, 4, 9, 16, 25, 36 ]

//OR
let name = ["neha", "somya", "mani", "money"]
let newName = name.map((Element, index, array) => {
    // console.log(`Element ${Element} at index ${index} and in array ${array} `)
    return Element.toUpperCase()
});
console.log(newName)     //[ 'NEHA', 'SOMYA', 'MANI', 'MONEY' ] if we comment out this console.log() then only that para print.


//          FIlter 
let num = [4, 5, 6, 7, 8, 9, 11, 12]
const greaterthanseven = (e) => {
    if (e > 7) {
        return true
    }
    return false
}
console.log(num.filter(greaterthanseven));       //[ 8, 9, 11, 12 ]


//          OR
const greaterthanseven1 = num.filter(e => e > 7)
console.log(greaterthanseven1)        //[ 8, 9, 11, 12 ]


let name2 = ["neha", "somya", "mani", "money", "kalki"]
const newname = name2.filter(e => name2.length > 4)

console.log(newname)



//          REDUCE

let arr3 = [1, 2, 3, 4, 5]
const red = (a, b) => {
    return a + b
}
console.log(arr3.reduce(red))       //   15

// or

let arr4 = [3, 4, 5, 6, 7, 8];
const re = arr4.reduce((res, curr) => {
    return res + curr;
});
console.log(re);



// //sum of all num
let b = Number(prompt("enter number!"));
let bArr = [];
for (let i = 1; i <= b; i++) {
    bArr[i - 1] = i;
}
let sum = bArr.reduce((res, curr) => {
    return res + curr;
})
console.log(sum);


//factorial
let a = Number(prompt("enter number!"));
let newArr3 = [];
for (let i = 1; i <= a; i++) {
    newArr3[i - 1] = i;
}
let factorial = newArr3.reduce((res, curr) => {
    return res * curr;
});
console.log(factorial);


//          ARRAY.FROM  : formation of array.
console.log(Array.from("Neha"));


//making array
let n = prompt("enter number!");
let newarr = [];
for (let i = 1; i <= n; i++) {
    newarr[i - 1] = i;
}
console.log(newarr);


//factorial
let m = prompt("enter number!");
let fact = 1;
for (let i = 1; i <= m; i++) {
    fact = fact * i;
}
console.log(fact);