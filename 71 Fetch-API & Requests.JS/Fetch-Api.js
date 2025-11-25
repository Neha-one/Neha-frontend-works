const URL = "https://fakestoreapi.com/carts";



// let getfacts = async () => {
//     console.log('getting data....');

//     let promise = await fetch(URL);
//     console.log(promise);
// }
// getfacts();

//OR---------

// async function getfact() {
//     console.log('getting data....');

//     let promise = await fetch(URL);
//     console.log(promise);       //JSON format
//     // console.log(promise.status);     //200
// }
// getfact();

const factPara = document.querySelector("#fact");
const Btn = document.querySelector("#btn");

//using async-await-----------SIMPLE AND EASY TO UNDERSTAND:-
// async function getData() {
//     console.log('getting data........');
//     let respose = await fetch(URL);
//     console.log(respose);
//     let data = await respose.json();
//     // console.log(data);
//     // console.log(data[1]);
//     // console.log(data[0].products);

//     factPara.innerText = data[0].date
// };


//using promise---------------HARD AND COMPLEX
function getData() {
    fetch(URL).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data[0]);
        factPara.innerText = data[0].date
    });
}
Btn.addEventListener("click", getData)


// settle means resolve or reject
// resolve means promise has settld successfully
// reject means promise has not settled successfully
async function getData() {
    let respose = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    //.json() return data in form of js object.
    let data = await respose.json();
    //.text()  return data in form of text.
    // let data=await respose.text();
    console.log(data);
    //we can also print data direct from return
    // return data;    //print from main() console.log(data);
    return 56;
}
async function main() {
    console.log('data loaded');
    let get = await getData()
    //this console-get is for return of getData() otherwise it show undefined without any return;
    console.log(get);
    console.log('data processing');
}
main();

// WE CAN TAKE URL AS A INPUT :-
async function getData2(url) {
    let respose = await fetch(url);
    let data = await respose.json();
    return data;

}
async function main2() {
    console.log('data loaded');
    let url = "https://jsonplaceholder.typicode.com/todos/1";
    let get = await getData2(url)
    console.log(get);
    console.log('data processing');
}
main2();

