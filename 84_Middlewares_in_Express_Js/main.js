const exp = require('express')
const blog = require('./blog')

const app = exp()
const port = 3000;
app.use('/blog', blog)

app.get('/', (req, res) => {
    res.send("hello mani")
})
app.listen(port);