const exp = require('express')
const app = exp()
const port = 3000;
const fs = require('fs')

//middleware 1
app.use((req, res, next) => {
    console.log(req.headers);
    req.neha = "i am neha";
    const time = new Date().toLocaleString();
    fs.appendFileSync("neha.txt", `${time} is a ${req.method}\n`)
    console.log("m1");
    next();
})
//middleware 2
app.use((req, res, next) => {
    console.log('m2');
    next();
})
app.get('/', (req, res) => {
    res.send("home page")
})
app.get('/about', (req, res) => {
    res.send("about page " + req.neha)
})
app.get('/contact', (req, res) => {
    res.send("contact page")
})
app.listen((port), () => {
    console.log(`example app listening on port ${port}`);

});
