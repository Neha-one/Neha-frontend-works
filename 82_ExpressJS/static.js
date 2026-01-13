const exp = require('express')
const app = exp()
const port = 3000

app.get("/", (req, res) => {
    res.send("Hello Neha")
});
//for making any file public it is neccessary to move it into a folder.
app.use(exp.static('public'))

app.listen(port);