const exp = require('express')
const app = exp()
const port = 3000

const blog = require('../routes/blog')

app.use('/blog', blog)

app.listen((port), () => {
    console.log(`example app listening on port ${port}`);

});