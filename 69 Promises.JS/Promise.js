// console.log('This is Promises');
//RESOLVE()
// let prom1=new Promise((resolve,reject)=>{
//     resolve("Neha")
// })

// prom1.then((a)=>{
//     console.log(a)
// })

// Easy Analogy 🍕

// Socho tumne pizza order kiya:

// Promise = "Pizza aa jaayega future mein."

// setTimeout = 3 minute wait.

// resolve("Neha") = delivery boy bolta hai "Pizza le lo".

// .then(a) = tum pizza receive karke bolte ho "Neha".

//  REJECT()
// let prom2=new Promise((resolve,reject)=>{
// setTimeout(()=>{
//     console.log('I am not done.');
//     reject("Error: Something went wrong.")
// },3000)
// })

// prom2.catch((err)=>{
//     console.log(err)
// })


//BOTH:-
// const prom3 = new Promise((resolve, reject) => {
//     let randomNum = Math.random();
//     if (randomNum < 0.5) {
//         resolve("RESOLVED! Congrats.");
//     }
//     else {
//         reject("Not resolved");
//     }
//     console.log(randomNum);
// })

// prom3.then((done) => {
//     console.log(done);
// })

// prom3.catch((err) => {
//     console.log(err);
// })

//FINALLY:-
// Usually use hota hai cleanup ka kaam ya loading stop karne ke liye.
// let prom4 = new Promise((resolve, reject) => {
//     let a = Math.random();
//     if (a < 0.5) {
//         resolve("RESOLVED! Congrats.");

//     }
//     else {
//         reject("Not resolved");
//     }
// })

// prom4.then((done) => {
//     console.log(done);
// })

// prom4.catch((err) => {
//     console.log(err);
// })

// prom4.finally(()=>{
//     console.log('This will run no matter what!');

// })

//PROMISE CHAINING:-
//multiple handles
// let prom5 = new Promise((resolve, reject) => {
//     resolve(5);
// })
// prom5.then((result) => {
//     console.log("step 1:", result);
//     return result * 5;  //pass 25 to next .then

// }).then((value) => {
//     console.log("step2:", value);
//     return value + 5;  //pass 30 to next .then

// }).then((solve) => {
//     console.log("step3:", solve);
// });

//PROMISE.ALL:-
let prom3 = new Promise((resolve, reject) => {
    let randomNum = Math.random();
    if (randomNum > 0.5) {
        console.log('YES 1');
        resolve("RESOLVED! Congrats.1");
    }
    else {
        console.log('NO 1');
        reject("Not resolved 1");
    }
})

let prom6 = new Promise((resolve, reject) => {
    let num = Math.random();
    if (num > 0.5) {
        console.log('YES 2');
        resolve("DONE! 2");
    }
    else {
        console.log('NO 2');
        reject("NOT DONE! 2");
    }
})

//IF BOTH ARE RESOLVED THEN PROMISE.ALL WORK
// let p36 = Promise.all([prom3, prom6])
// p36.then((e) => {
//     console.log(e)
// }).catch(err => {
//     console.log(err);
// })

//PROMISE.ALLSETTLED:- 
//all resolved or rejected it shows their status and values.

// let p36 = Promise.allSettled([prom3, prom6])
// p36.then((e) => {
//     console.log(e)
// }).catch(err => {
//     console.log(err);
// })

//      output:-
// 0: {status: 'fulfilled', value: 'RESOLVED! Congrats.1'}
// 1: {status: 'fulfilled', value: 'DONE! 2'}


//PROMISE.RACE:-
// let p36 = Promise.race([prom3, prom6])
// p36.then((e) => {
//     console.log(e)
// }).catch(err => {
//     console.log(err);
// })

//PROMISE.ANY:-
// let p36 = Promise.any([prom3, prom6])
// p36.then((e) => {
//     console.log(e)
// }).catch(err => {
//     console.log(err);
// })


//PROMISE.RESOLVE:-
// let p36 = Promise.resolve([prom3, prom6])
// p36.then((e) => {
//     console.log(e)
// }).catch(err => {
//     console.log(err);
// })



//PROMISE.REJECT:-
let p36 = Promise.reject([prom3, prom6])
p36.then((e) => {
    console.log(e)
}).catch(err => {
    console.log(err);
})