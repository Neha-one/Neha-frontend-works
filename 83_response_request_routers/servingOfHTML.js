const exp = require("express")
const app = exp();
const port = 3000;

app.get("/myfile", (req, res) => {
    console.log('Hii its myfile html');
    res.sendFile('templates/myfile.html', { root: __dirname })
});

app.listen(port)
  