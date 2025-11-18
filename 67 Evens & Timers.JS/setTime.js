//SETINTERVAL :- RUN CONTINUOSTLY.
function RandomColor() {
    let val1 = Math.floor(Math.random() * 255);
    let val2 = Math.floor(Math.random() * 255);
    let val3 = Math.floor(Math.random() * 255);
    return `rgb(${val1},${val2},${val3})`
}
// let ChildContainer = document.querySelector(".childcontainer2");
// setInterval(() => {
//     ChildContainer.style.backgroundColor = RandomColor();
// }, 1000);


// let Child = document.querySelector(".child2");
// setInterval(() => {
//     Child.style.backgroundColor = RandomColor();
// }, 1000);


// let Cotainer = document.querySelector(".container2");
// setInterval(() => {
//     Cotainer.style.backgroundColor = RandomColor();
// }, 1000);


// let contaT = document.querySelector(".conta");
// setInterval(() => {
//     contaT.style.color = RandomColor();
// }, 1000);


//METHOD TO STOP THE SETINTERVAL() :-
let contaT = document.querySelector(".conta");
let a = setTimeout(() => {
    contaT.style.color = RandomColor();
}, 1000);
console.log(a);
//IN CONSOLE:-clearInterval(x); here x number which is show in console.

//SETTIMEOUT :-  RUN ON TIME THEN STOP.

let Child = document.querySelector(".child2");
b = setTimeout(() => {
    Child.style.backgroundColor = RandomColor();
}, 1000);
console.log(b);
//IN CONSOLE:-clearTimeout(x); here x=number which is show in console.


let ChildContainer = document.querySelector(".childcontainer2");
setTimeout(() => {
    ChildContainer.style.backgroundColor = RandomColor();
}, 1000);


let Cotainer = document.querySelector(".container2");
setTimeout(() => {
    Cotainer.style.backgroundColor = RandomColor();
}, 1000);