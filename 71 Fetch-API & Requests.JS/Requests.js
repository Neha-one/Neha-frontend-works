// TYPES OF REQUESTS:-

//   1. GET Request----Give me the data.

// by default.
// just ask for for data.(ask for menu.)

fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log("error", err));

//           2. POST Request----I want to add something new.

//You send data to the server (like creating a new item).

let getData = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify({ title: "Hello", body: "world", userId: 1 })
})
getData
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log("error", err)
    );

//output    {title: 'Hello', body: 'world', userId: 1, id: 101}

let getdata = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify({ title: "hello", body: "world" })
})
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log("error hai bhai", err)
    );


//           3. PUT Request----I want Update data/modify existing data on the server.

let getdata3 = fetch("https://jsonplaceholder.typicode.com/posts/1",
    {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "put": "neha",
            age: 21
        })
    }
)
    .then((res) => res.json()).then((data) => console.log(data))
    .catch((err) => console.log("error", err)
    );


//           4. DELETE Request----I want data.
let getdata4 = fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE"
})
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log('error', err)
    );