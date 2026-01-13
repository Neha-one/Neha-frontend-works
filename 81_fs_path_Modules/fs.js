const fs = require("fs")

// //writeFileSync behave like synchronous property
// // console.log('starting');
// // fs.writeFileSync("neha.txt", "hii it's Neha ")
// // console.log('ending');

// //writeFile behave like asynchronous property.
// console.log('starting');
// fs.writeFile("mani.txt", "Namaste India", () => {
//     console.log('done');
//     //  READ    
//     //CALLBACK HELL:-
//     fs.readFile("mani.txt", (error, data) => {
//         // console.log(error, data);
//         console.log(error, data.toString());
//     })
//     // again
//     fs.readFile("mani.txt", (error, data) => {
//         // console.log(error, data);
//         console.log(error, data.toString());
//     })
// })

//using utf-8
// fs.readFile("mani.txt", "utf-8", (e, d) => {
//     console.log(d);
// });

// //APPEND 
fs.appendFile("neha.txt", "How are you", (e, d) => {
    console.log(d);
})
// console.log('ending');

