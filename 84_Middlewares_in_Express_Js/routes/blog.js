const exp = require('express')
const routes = exp.Router();

//this middleware that is specific to this router
routes.use((req, res, next) => {
    const time = new Date().toLocaleString();
    console.log(`Time: ${time}`);
    next();

})
routes.get('/', (req, res) => {
    res.send("hii its home page for routes middleware")
})
routes.get('/about', (req, res) => {
    res.send("hii its about page for routes middleware")
})
routes.get('/contact', (req, res) => {
    res.send("hii its contact page for routes middleware")
})

module.exports = routes;