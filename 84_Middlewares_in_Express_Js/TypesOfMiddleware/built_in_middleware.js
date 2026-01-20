const exp = require('express')
const app = exp()
const port = 3000;

//built-in middleware
app.use(exp.static('public'))

app.get('/', (req, res) => {
    res.send("home page")
})
app.get('/about', (req, res) => {
    res.send("about page")
})
app.get('/contact', (req, res) => {
    res.send("contact page")
})
app.listen((port), () => {
    console.log(`example app listening on port ${port}`);

});