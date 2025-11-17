// Ques 01 : Create a h2 element with text "hello js" . append "from neha" to this text using js.
let h2 = document.querySelector(".h2-heading");
console.log(h2.innerText);      //Hello js!
h2.innerText = h2.innerText + " Neha";
console.log(h2.innerText);      //Hello js! Neha


//Ques 02 : Create 3 divs with common class name - "team" . Access them & add some unique text to each of them.
let divs_team = document.querySelectorAll(".team");

for (let i = 0; i < divs_team.length; i++) {
    divs_team[i].innerText = `new unique value ${i + 1}`;
    console.log(divs_team[i].innerText);
}

// OR 

let idx = 1;
for (let el of divs_team) {
    el.innerText = `new ${idx}`;
    idx++;
    console.log(el.innerText);

}

//Ques 03 : Create a <p> tag in html , give it a class and some styling . Now create a new class in css and try to append this class to the <p> element. did you notice , how u overwrite the class name when you add a new one ? solve this problem using classlist.

let para = document.querySelector(".ptag");
console.log(para.innerText);

console.log(para.getAttribute("class"));  //ptag

para.setAttribute("class", "mani");
// now 
console.log(para.getAttribute("class"));  //mani

//add new class attribute to p tag
para.classList.add("newclass");

//remove new class attribute to p tag
para.classList.remove("mani")