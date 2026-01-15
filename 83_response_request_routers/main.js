const exp = require('express')
const app = exp()
const port = 3000

app.use(exp.static('public'))
//get request have limit of 8192 bytes (8 KB)
app.get('/', (req, res) => {
    console.log('hey it is a get request');
    
    res.send('hello world')
})
app.post('/', (req, res) => {
        console.log('hey it is a post request');

    res.send('hello world')
})
app.listen(port)