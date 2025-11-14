let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//syntax
// splice(startIdx , delCount , newEl1...)


// Add Element
arr.splice(2, 0, 101);
console.log(arr);
// [1, 2, 101, 3, 4,  5, 6,   7, 8, 9, 10]

//Delete Element
arr.splice(3, 1);
console.log(arr);
// [1, 2, 3,  5, 6, 7, 8, 9, 10]

//Replace Element
arr.splice(3, 1, 101);
console.log(arr);
// [1, 2, 3, 101, 5, 6, 7, 8, 9, 10]

//slice a part
arr.splice(4);
console.log(arr);
//[ 1, 2, 3, 4 ]