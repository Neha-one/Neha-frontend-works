// //      IF I CLICKED ON CHILD-CONTENT THEN WITH CHILD → CHILDCONTAINER AND CONTAINER WILL BE CLICKED. LIKE IF WE ARE IN OUR VILLAGE THEN WE ARE ALSO IN OUR COUNTRY AND ALSO WE ARE IN THIS WORLD.

document.querySelector(".child").addEventListener("click", (e) => {
    alert("Child was clicked. Yahh")
});
// //      IF I CLICKED ON CHILDCONTAINER-CONTENT THEN WITH CHILDCONTAINER → CONTAINER WILL BE CLICKED. LIKE IF WE ARE IN OUR COUNTRY THEN WE ARE ALSO IN THIS WORLD.

document.querySelector(".childcontainer").addEventListener("click", (e) => {
    alert("ChildContainer was clicked. Yahh")
});
// //      IF I CLICKED ON CONTAINER-CONTENT THEN ONLY CONTAINER WILL BE CLICKED BECAUSE THIS IS LAST OUTER PLACE.

document.querySelector(".container").addEventListener("click", (e) => {
    alert("Container was clicked. Yahh")
});

//IF WE WANT TO STOP THIS PARENTS FIRE THEN WE HAVE TO ADD STOPPROPOGATION.

document.querySelector(".child").addEventListener("click", (e) => {
    //STOP PARENTS FIRING →
    e.stopPropagation();
    alert("Child was clicked. Yahh")
});

document.querySelector(".childcontainer").addEventListener("click", (e) => {
    //STOP PARENTS FIRING →
    e.stopPropagation();
    alert("ChildContainer was clicked. Yahh")
});


document.querySelector(".container").addEventListener("click", (e) => {
    alert("Container was clicked. Yahh")
});



//REMOVE EVENTLISTENER →
let Child = document.querySelector(".child");
function RemoveEvent() {
    Child.style.backgroundColor = "red";

    Child.removeEventListener("click", RemoveEvent);
}
Child.addEventListener("click", RemoveEvent);