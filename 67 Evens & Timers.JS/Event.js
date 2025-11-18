//              MOUSE EVENT:-

//CLICK EVENT →01
let button1 = document.getElementById("btn1");
button1.addEventListener("click", () => {
    console.log("I was clicked. Yahh")
});

//CLICK EVENT →02
let button2 = document.getElementById("btn2");
button2.addEventListener("click", () => {
    document.querySelector("#btn2").innerHTML = "<b>Yes! you were clicked</b> Enjoy your click."
});

//DOUBLE CLICK →
let button3 = document.getElementById("btn3");
button3.addEventListener("dblclick", () => {
    document.querySelector(".box").innerHTML = "<b>Yes! you were clicked</b> Enjoy your click."
});

//CONTEXTMENU EVENT → means right click.
let button4 = document.getElementById("btn4");
button4.addEventListener("contextmenu", () => {
    console.log("don't hack us by right click oki! ")
});

//MOUSEDOWN → click by mouse.
let button5 = document.getElementById("btn5");
button5.addEventListener("mousedown", () => {
    console.log("i am just click any button of mouse. ")
});

//MOUSEUP →
let button6 = document.getElementById("btn6");
button6.addEventListener("mouseup", () => {
    console.log("mouse button is released.")
});

//MOUSEMOVE →
let button7 = document.getElementById("btn7");
button7.addEventListener("mousemove", () => {
    console.log("i am just move my cursor on button.")
});

//MOUSEOVER →
let button8 = document.getElementById("btn8");
button8.addEventListener("mouseover", () => {
    console.log("mouse enters or hovers over an element.")
});

//MOUSEOUT →
let button9 = document.getElementById("btn9");
button9.addEventListener("mouseout", () => {
    console.log("mouse leaves the element and i love this.")
});

//MOUSEENTER →
let button10 = document.getElementById("btn10");
button10.addEventListener("mouseenter", () => {
    console.log("similar to mouseover.")
});

//MOUSELEAVE →
let button11 = document.getElementById("btn11");
button11.addEventListener("mouseleave", () => {
    console.log("similar to mouseout.")
});

//              KEYBOARD EVENTS:-
//KEYDOWN EVENT →
//Now it will work for everytime.
document.addEventListener("keydown", (e) => {
    console.log(e)
});    //let if i click g then it shows "{isTrusted: true, key: 'g', code: 'KeyG', location: 0, ctrlKey: false, …}"

//OR →
document.addEventListener("keydown", (e) => {
    console.log(e.key, e.keyCode)
});  //let if i click n then it show "n 78".

//KEYPRESS → 
document.addEventListener("keypress", (e) => {
    console.log(e)
});    //if i press f "{isTrusted: true, key: 'f', code: 'KeyF', location: 0, ctrlKey: false, …}"

//KEYUP →
document.addEventListener("keyup", (e) => {
    console.log(e)
});

//              FOCUS EVENT:-
//FOCUS EVENT →
let button12 = document.getElementById("btn12");
button12.addEventListener("focus", () => {
    document.querySelector("#btn12").style.backgroundColor = "red";
    document.querySelector("#btn12").innerHTML = "clicked";
    document.querySelector("#btn12").style.color = "white";
});

//BLUR EVENT →
let button13 = document.getElementById("btn13");
button13.addEventListener("blur", () => {
    button13.style.backgroundColor = "blue";
    document.querySelector("#btn13").innerHTML = "clicked";
    document.querySelector("#btn13").style.color = "white";
});

//FOCUSIN EVENT → similar to FOCUS.

//FOCUSOUT EVENT → similar to BLUR.
