// const express = require("express");
// const path = require("path");

// const app = express();
// const port = 3000;

// // make public folder accessible
// app.use(express.static("public"));

// /* 1️⃣ res.send() */
// app.get("/hello", (req, res) => {
//   res.send("Hello from Express");
// });

// /* 2️⃣ res.json() */
// app.get("/student", (req, res) => {
//   res.json({
//     name: "Neha",
//     course: "Backend JS",
//     age: 20
//   });
// });

// /* 3️⃣ res.status() */
// app.get("/error", (req, res) => {
//   res.status(404).send("Page not found");
// });

// /* 4️⃣ res.sendFile() */
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// /* 5️⃣ res.redirect() */
// app.get("/home", (req, res) => {
//   res.redirect("/");
// });

// app.listen(port, () => {
//   console.log("Server running on port 3000");
// });

const express = require('express')
const app = express()
const port = 3000

app.get("/hello", (req, res) => {
    res.send("hello ")
})
app.get("/sjson", (req, res) => {
    res.json({
        name:
            "neha",
        age: 21
    })
})

app.get("/error", (req, res) => {
    res.status(404).send("page not found ")
})
app.get("/", (req, res) => {
    res.sendFile("public/index.html", { root: __dirname })
})
app.get("/home", (req, res) => {
    res.redirect("/")
})
app.listen(port)