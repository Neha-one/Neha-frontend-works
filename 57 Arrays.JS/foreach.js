let arr = [1, 2, 3, 4, 5]

//forEach() is a method.
arr.forEach(function printVal(val) {
    console.log(val); //1,2,3,4,5
});

//in arrow function
arr.forEach((val) => {
    console.log(val); //1,2,3,4,5
});


let strarr = ["apple", "banana", "litchi", "graps", "mango"]
strarr.forEach((val) => {
    console.log(val.toUpperCase());     //APPLE ,BANANA ,LITCHI ,GRAPS ,MANGO

});
//      OR
strarr.forEach(function newstr(val, idx, array) {
    console.log(val.toUpperCase(), idx, array);      //APPLE ,BANANA ,LITCHI ,GRAPS ,MANGO
});