const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.get("/", (req, res) => {
    let siteName = "AlgoNeha";
    let searchText = "Search Now";
    let arr = ["code", 10, 21];
    //arr:arr or direct arr 
    res.render("index", { searchText: searchText, siteName: siteName, arr })
});

app.listen(port);