let arr = [1, 2, 3, 4, 5]
//  Index  0 1 2 3 4

console.log(arr);
console.log(arr.length)
console.log(arr[0])

//mutable : can be changed value :--
arr[1] = "999"
console.log(arr)

// typeof array = object.
console.log(typeof (arr))

//change array into string.
console.log(arr.toString())   // 1,2,3,4,5

// join anything to arraay
console.log(arr.join(" and "))  //1 and 3 and 4 and 5 and 6

// pop  :- remove from last.
arr.pop()  // 5
console.log(arr)         // [1,2,3,4]

arr.pop()   // 4 
console.log(arr)         // [1,2,3]

// push     :- add anything at last.
arr.push(55)
console.log(arr)        //[ 1, 2, 3, 4, 5, 55 ]


//shift     :- remove from start.
arr.shift()
console.log(arr)    //[2, 3, 4, 5]

//unshift   :- add at begining
arr.unshift(88)
console.log(arr)    //[ 88, 1, 2, 3, 4, 5 ]

//delete any specific index
delete arr[2]
console.log(arr)     //[ 1, 2, <1 empty item>, 4, 5 ]
console.log(arr.length)     // 5  means hold the place but delete the item.

//concate   :- does not change existing arrays.
let a1 = [1, 2, 3, 4, 5]
let a2 = [11, 22, 33, 44, 55]
let a3 = [111, 222, 333, 444, 555]

console.log(a1.concat(a2, a3));      //[1, 2, 3, 4, 5, 11, 22, 33, 44, 55, 111, 222, 333, 444, 555]

//sort()

//splice :-
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  Index  0 1 2 3 4 5 6 7 8 9

// remove n numbers:-
array.splice(2, 4);  //[1, 2, 7, 8, 9, 10]
//                    // here 2-> index from where i have to take remove the numbers and 4 is that quantity means how much numbers i have to take remove from that 2 index.
console.log(`array=${array}`)

//remove numbers and place another numbers:-
array.splice(1, 1, 444, 555, 666)   //[1,444,555,666,3,4,5,6,7,8,9,10]
console.log(array);

//slice
array.slice(3)      //start from index 3 and end of the index it slice means cut and show.
array.slice(1, 3)    //start from index 1 and end with index .
console.log(array)


let revarr = array.reverse();
console.log(`reverse_array=${revarr}`)
// OR
console.log(`reverse_array=${array.reverse()}`);
