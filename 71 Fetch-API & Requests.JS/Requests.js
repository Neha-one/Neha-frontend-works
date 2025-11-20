//TYPES OF REQUESTS:-

//          🟢 1. GET Request

//by default.
//just ask for for data.(ask for menu.)

// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then(response=>response.json())
// .then(data=>console.log(data));


//          🟢 2. POST Request

//You send data to the server (like creating a new item).

let getData = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify({ title: "Hello", body: "world", userId: 1 })
})
getData.then(response => response.json())
    .then(data => console.log(data));

    //output    {title: 'Hello', body: 'world', userId: 1, id: 101}