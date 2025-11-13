//      Automatic name generate from given list of name.

//      01:USING STRING:-
const adj = "Crazy Amazing Fire";
const adjlist = adj.split(" ");

function rand(list) {
    return list[Math.floor(Math.random() * list.length)]; //here in place of list.length we can also write numbers like 3.
}
console.log(Math.random());
console.log(rand(adjlist));

console.log(adjlist.indexOf("Crazy"));  // 0
console.log(adjlist.indexOf("Amazing"));    //1
console.log(adjlist.indexOf("Fire"));   //2
console.log(adjlist.length) //3

//          02:USING OBJECT:-

const adj1 = {
    name: 'Neha',
    age: '19',
    role: "engineer"
};
// console.log(adj1.lenght);
// console.log(Object.keys(adj1).length)
function rand(obj) {
    const value = Object.values(obj);
    return obj[Math.floor(Math.random() * value.length)];
}
console.log(rand(adj1));


//          03:USING ARRAY:-

const adj2 = ['Neha', 'Mani', 'Komal'];

function rand(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

console.log(rand(adj2));


//          04:USING OBJECT:-

const adj3 = { name: 'Neha', age: '19', role: "engineer" };

function rand(obj) {
    const keys = Object.keys(obj);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return obj[randomKey];
}
console.log(rand(adj3));

//practice
const name = "neha mani somya";
const newname = name.split(" ");
function randname(list) {
    console.log(list[Math.floor(Math.random() * 3)])
}
randname(newname);