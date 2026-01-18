const exp = require('express')
const app = exp()
const port = 3000

app.use(exp.static('public'))
//get request have limit of 8192 bytes (8 KB)
app.get('/', (req, res) => {
    console.log('hey it is a get request');
    res.send('hello world get')
});
//CHAINING OF REQUESTS:
// The browser sends a POST request using the Fetch API, and the Express server handles it using app.post() and sends a response back to the client.
app.post('/', (req, res) => {
    console.log('hey it is a post request');
    res.send('hello world post')
}).put('/', (req, res) => {
    console.log('hey it is a put request');
    res.send('hello world put')
}).delete('/', (req, res) => {
    console.log('hey it is a delete request');
    res.send('hello world delete')
})
app.listen(port);