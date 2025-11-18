console.log(document.querySelector(".box"))
//<div class="box">Hii i am a box</div>

console.log(document.querySelector(".container"))
//<div class="container">...</div>

//innerHTML means inside the HTML
console.log(document.querySelector(".box").innerHTML)
//Hii i am box

console.log(document.querySelector(".container").innerHTML)
//<div class="box">Hii i am a box</div>

console.log(document.querySelector(".box").innerText)
//Hii i am a box

console.log(document.querySelector(".container").innerText)
//Hii i am a box

//outerHTML means that HTML + inside HTML
console.log(document.querySelector(".box").outerHTML)
//<div class="box">Hii i am a box</div>

console.log(document.querySelector(".container").outerHTML)
//<div class="container">
//     <div class="box">Hii i am a box</div>
// </div>


// tagName → only works for HTML tags (like <div>, <p>, <b>).
// nodeName → works for everything (tags, text, comments, document).

console.log(document.querySelector(".box").tagName)
console.log(document.querySelector(".container").tagName)
//DIV

console.log(document.querySelector(".box").nodeName)
console.log(document.querySelector(".container").nodeName)
//DIV

console.log(document.querySelector(".container").textContent)
//Hii i am a box

console.log(document.querySelector(".container").hidden)
//false

console.log(document.querySelector(".container").hidden = true)
//true

console.log(document.querySelector(".box").innerHTML = "Hii i am Neha")
//  Hii i am Neha

console.log(document.querySelector(".box").hasAttribute("style"))
//true

console.log(document.querySelector(".box").getAttribute("style"))
//'display: flex;'

console.log(document.querySelector(".box").setAttribute("style", "display:inline"))
//change in code in browser

console.log(document.querySelector(".box").removeAttribute("style"))
//it will remove the style attribute from code in browser but just for temporary.

// console.log(document.designMode="on")
// this make any website able to edit.
// so as a web developer you don't have to beleive on Screenshot.

console.log(document.querySelector(".box").dataset)     //{createdby: 'neha', conceptby: 'mani'}
// it give data attribute (data-created="neha") here data will be dataset , created="neha" will be as a key-value pair.

//remove() :- it removes everything i mean that element also
// console.log(document.querySelector(".container").remove())

//classlist
console.log(document.querySelector(".container").classList);    // ['container', 'red', 'bg-red', value: 'container red bg-red']

//classname
console.log(document.querySelector(".container").className)     //container red bg-red

//add class
console.log(document.querySelector(".container").classList.add("neha"))

//remove class
console.log(document.querySelector(".container").classList.remove("neha"))

//toggle
console.log(document.querySelector(".container").classList.toggle("box"))


//APPEND() → Inside, at the end.
let div = document.createElement("div"); //here at the place of div we can also create a para element , h2 or any element.
div.innerHTML = "I have been inserted <b> by Neha </b> "
div.setAttribute("class", "created");
document.querySelector(".container").append(div);

//PREPEND() → Inside the element, at the start.
let para = document.createElement("p");
para.innerHTML = "Namaste"
document.querySelector(".created").prepend(para);

//BEFORE → Outside, before the element.
let btn = document.createElement("button");
btn.setAttribute("class", "btnatt")
btn.innerHTML = "submit"
document.querySelector(".container").before(btn);

//AFTER() → Outside, after the element.
let head2 = document.createElement("h2");
head2.innerHTML = "Baranwal"
document.querySelector(".created").after(head2)

//REPLACEWITH() → Replaces the element completely.
let div2 = document.createElement("div");
div2.innerHTML = "div2"
document.querySelector(".container").replaceWith(div2)

let cont = document.querySelector(".container")

// cont.insertAdjacentHTML("beforebegin", "<b>I am under the water. Please help me here to much raining...<b/> ");

// let btn2 = document.createElement("button");
// btn2.textContent = "click here";
// cont.insertAdjacentElement("afterbegin", btn2);

// cont.insertAdjacentText("beforeend", "exit")