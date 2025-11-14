let a = [1, 2, 3, 4, 5]
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
}


let b = [1, 2, 3, 4, 5]
b.forEach((value, index, arr) => {
    console.log(value, index, arr)   //we can write anything at place of value, index and array we can see this in next code.
});

//1 0 [ 1, 2, 3, 4, 5 ]
//2 1 [ 1, 2, 3, 4, 5 ]
//3 2 [ 1, 2, 3, 4, 5 ]
//4 3 [ 1, 2, 3, 4, 5 ]
//5 4 [ 1, 2, 3, 4, 5 ]

//only print value and index-
let c = [3, 5, 6, 7, 7]
c.forEach((v, i) => {
    console.log(v, i)
});


//     //only element-
let array = [4, 6, 4, 64, 445]
array.forEach(el => {
    console.log(el)
});


let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}
for (const k in obj) {      //k stand for key : i just want to show you that we write key for good looking and nothing else.
    if (Object.hasOwnProperty.call(obj, k)) {
        const element = obj[k];
        console.log(k, element)
    }
}

//output-
// a 1
// b 2
// c 3
// d 4


//printing of element===value===iterator===any name as you like.
let d = [3, 5, 8, 9, 55, 33]
for (const element of d) {
    console.log(element)
}

for (const value of d) {
    console.log(value)
}

for (const el of d) {
    console.log(el)
}