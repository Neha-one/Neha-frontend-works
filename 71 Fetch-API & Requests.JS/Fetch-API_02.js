//settle means resolve or reject
//resolve means promise has settld successfully
//reject means promise has not settled successfully
// async function getData() {
//     let respose = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     //.json() return data in form of js object.
//     let data = await respose.json();
//     //.text()  return data in form of text.
//     // let data=await respose.text();
//     console.log(data);
//     //we can also print data direct from return
//     // return data;    //print from main() console.log(data);
//     return 56;
// }
// async function main() {
//     console.log('data loaded');
//     let get = await getData()
//     //this console-get is for return of getData() otherwise it show undefined without any return;
//     console.log(get);
//     console.log('data processing');
// }
// main();

//WE CAN TAKE URL AS A INPUT :-
// async function getData(url) {
//     let respose = await fetch(url);
//     let data = await respose.json();
//     return data;

// }
// async function main() {
//     console.log('data loaded');
//     let url="https://jsonplaceholder.typicode.com/todos/1";
//     let get = await getData(url)
//     console.log(get);
//     console.log('data processing');
// }
// main();


