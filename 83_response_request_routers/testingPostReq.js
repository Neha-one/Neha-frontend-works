const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'))

app.post('/', (req, res) => {
    console.log('neha');

    res.send("hii its testing of post req.")
});
app.listen(port);
