console.log("Hello World")

// three types of nodes:- text node, comment node, element node.
//empty space used to call=text node
//comment=comment node
//element (h1, p , div)= element node

// window Object = it is browser's object not JS's object.
// window._____  = global object

window.console.log("Neha")
// or 
console.log("Neha")

// DOM:-when a page is loaded , the browser creates a Document object model of the page.

//                      CHILDRENS

//indexing of children start from 0
console.log(document.body.childNodes)


console.log(document.body.childNodes[0])        //   if empty space :- #text

console.log(document.body.childNodes[1])

console.log(document.body.childNodes[1].childNodes)    //show all childnodes of childnode[1] of body.


console.log(document.body.firstElementChild)  // <dl>...</dl>
console.log(document.body.firstElementChild.children[2])  //<dd>...</dd>

//other method:-
let cont = document.body.childNodes[1]

console.log(cont)

console.log(cont.firstChild)    //#text

console.log(cont.lastChild)     //#text


//ONLY PRINT OF ELEMENTS:-
console.log(cont.firstElementChild)

console.log(cont.lastElementChild)

// //  WE CAN APPLY DIRECT OPERATION ON CHILD OF BODY OR CHILD OF CONT
console.log(cont.firstElementChild.style.color = "red")
console.log(cont.lastElementChild.style.backgroundColor = "yellow")



//                    PARENTS
console.log(cont.lastElementChild.parentElement)


//                      SUBLING NODES

console.log(document.body.childNodes[1].children[1].nextElementSibling)
console.log(document.body.childNodes[1].children[2].previousElementSibling)

//              TABLE:-
console.log(document.body.children[2].rows)     //[tr, tr]
console.log(document.body.children[2].caption)      //    <caption>Details</caption>



//          HAS CHILD PROPERTY:-
console.log(document.body.children[0].firstElementChild.hasChildNodes())        //true
// console.log(document.body.children[0].children[3].hasChildNodes())        //false :-because we also remove text from that .



//parentNode → works for any type of parent (even document).

// parentElement → only works if the parent is an Element.

//typeof(document) :-object
//typeof(window) :-object


//              TAG-NAME:-
let firstEL = document.querySelector(".box");
console.log(firstEL.tagName);       //  DIV



//different between innertext and innerhtml
// innerText=pure text means only text from that tag .
// innerHtml = text with their tags.