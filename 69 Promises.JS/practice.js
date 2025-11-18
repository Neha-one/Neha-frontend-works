//3 state of promises

//                          state 1. pending...

// let promise1 = new Promise((resolve, reject) => {
//     console.log('i am a promise...pending....');
// });


//                          state 2. resolved / fullfilled

// let promise2 = new Promise((resolve, reject) => { //prototype:promise
//     console.log('i am a promise... resolved.');  // state:fullfilled
//     resolve(123)   //result:123

// });


//                          state 3. rejected

// let promise3 = new Promise((resolve, reject) => {  //prototype:promise
//     console.log('i am a promise... rejected.');  // state:rejected
//     reject("some error occured!")   //result:some error occured!
// });


// ---------------- EXAMPLE 01 ----------------

// function getData(dataId) {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('data', dataId);
//             resolve("success");

//         }, 5000)
//     })
// }
// let get = getData(234);
// //if we print get soon under 5sec then it shows pending but after printing 234 it shows fullfilled. and result is success.




// ---------------- EXAMPLE 02 ----------------

// function getpromise() {
//     return new Promise((resolve, reject) => {
//         console.log('I am promise');
//         resolve("success")
//         // reject("rejected")
//     })
// };
// let p = getpromise();
// p.then((res) => {
//     console.log('promise fullfilled', res);
// });
// p.catch((err) => {
//     console.log('rejected', err);
// });



// ---------------- EXAMPLE 03 ---------long method-------

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('data1');
//             resolve("success1")
//         }, 2000);
//     });
// };
// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('data2');
//             resolve("success2")
//         }, 2000);
//     });
// };

// console.log('fetching data1...');
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
// });
// console.log('fetching data2...');
// let p2 = asyncFunc2();
// p2.then((res) => {
//     console.log(res);
// });



// ---------------- Promise chaining ----------------
// ---------------- EXAMPLE 04 ----------------

function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('data1');
            resolve("success1")
        }, 2000);
    });
};
function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('data2');
            resolve("success2")
        }, 2000);
    });
};

// console.log('fetching data1...');
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log('fetching data2...');
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//     });
// });
//              OR
// console.log('fetching data1...');
// asyncFunc1().then((res) => {
//     console.log('fetching data2...');
//     asyncFunc2().then((res) => { });
// });



// ---------------- EXAMPLE 05 ----------------

function Getdata(dataID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('data', dataID);
            resolve("success")
        }, 1000);
    });
}

//-----------Promise Chain:-----------
console.log('fetching data1...');
Getdata(1).then((res) => {
    console.log('fetching data2...');
    return Getdata(2)
}).then((res) => {
    console.log('fetching data3...');
    Getdata(3)
}).then((res) => {
    console.log('fetching data4...');
    Getdata(4)
}).then((res) => { })