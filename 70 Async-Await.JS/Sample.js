//WITHOUT USING ASYNC AND AWAIT :-

// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(21)
//         }, 2000);
//     })
// }

// console.log('loading data');
// console.log('do something else');
// console.log('load data');

// //calling getData()
// let data = getData()
// //want to print all these console in fun.
// data.then((v) => {
// //promise will run after given time.
//     console.log(data);
// //now after given time and after data it will print.
//     console.log('process data');
//     console.log('task 2');
// })



//WITH USING OF ASYNC AND AWAIT :-
//asyns means this fun will in background.
async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(21)
        }, 10000);
    })
}
//befor using await we have to put this inside  a async function.
async function main() {


    console.log('loading data');
    console.log('do something else');
    console.log('load data');

    //cause of await it will wait in given time to run 1st data(means getData()) and after that next cnl will print.
    let data = await getData()

    console.log(data);

    console.log('process data');

    console.log('task 2');

}

main();