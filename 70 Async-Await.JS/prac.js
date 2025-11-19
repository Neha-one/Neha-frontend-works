// //special conditions work with Promises.

// async function getData() {
//     //Simulate getting data from a server.
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(21)
//         }, 3500);
//     })
// }

// async function main() {

//     console.log("loading data")
//     console.log('do something else');

//     let data = await getData();
//     console.log(data);

// console.log('process data');
// }

// main();


//          PRACTICE:-
// async function name() {

//     const time = Math.floor(1 + Math.random() * 5) * 1000;
//     return new Promise(resolve => setTimeout(resolve, time));
// }

// async function show() {
//     const msg = ["neha", "somya", "mani"]
//     for (const text of msg) {
//         await name();
//         console.log(text);
//     }

// }
// show();