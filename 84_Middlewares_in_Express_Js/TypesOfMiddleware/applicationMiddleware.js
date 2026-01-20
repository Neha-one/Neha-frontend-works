const exp = require('express')
const app = exp()
const port = 3000

app.use((req, res, next) => {
    req.neha = "Neha"
    console.log('Request received by ' + req.neha);
    next();

})
app.get('/', (req, res) => [
    res.send("hii its home page of application middleware.")
])
app.listen((port), () => {
    console.log(`example app listening on port ${port}`);

});