console.log("Neha")
//          searching DOM by class-name
let boxes = document.getElementsByClassName("box")
console.log(boxes)

boxes[3].style.backgroundColor = "red"


//          searching DOM by Id-name
document.getElementById("redbox").style.backgroundColor = "yellow"


//          searching DOM by query-selector
document.querySelector(".box").style.backgroundColor = "orange"       //apply only on first box class name.

console.log(document.querySelectorAll(".box"))      //we show html collection of all box classname

//NOTICE
// document.querySelectorAll(".box").style.backgroundColor = "green";        //not working because we can apply style on element not on html .


document.querySelectorAll(".box").forEach(element => {
    // console.log(element)     //all elements class-name .box will be printed.
    element.style.backgroundColor = "red"     //each box of class-name .box will be red backgroundcolor.
});
//OR
boxes = document.getElementsByClassName("box");
// boxes = document.querySelectorAll(".box")
for (i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = "orange"
};
//OR
boxes = document.querySelectorAll(".box")
for (let el of boxes) {
    el.style.backgroundColor = "green"
}



// //          searching DOM by tag-name
console.log(document.getElementsByTagName("div"))       //[div.container, div.box, div.box, div.box, div.box, div#redbox.box, div.box, div.box, redbox: div#redbox.box]

// console.log(document.getElementsByTagName("div").style.backgroundColor = "yellow")    //document.getElementsByTagName("div") returns an HTMLCollection (like an array of elements).
// // An HTMLCollection doesn’t have .style, because .style exists only on a single element, not on the whole collection.
// // That’s why your code doesn’t work.

// //but we can apply using for loop

let applyproperty = document.getElementsByTagName("div");
for (let element of applyproperty) {
    console.log(element)
}


//          MATCH PROPERTY
document.body.children[0].children[4].matches("#redbox")
console.log(document.body.children[0].children[4].matches("#redbox"))       //true

//OR
let boss = document.getElementsByTagName("div")
console.log(boss[5].matches("#redbox"))


//          CONTAIN PROPERTY
console.log(document.querySelector(".container").contains(document.querySelector("body")))      //false

let boss1 = document.getElementsByTagName("div")
console.log(document.querySelector(".container").contains(boss1[0])); //true