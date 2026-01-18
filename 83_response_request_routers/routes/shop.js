const express = require('express');
const router = express.Router()

//define the home page route
router.get('/', (req, res) => {
    res.send('shop home page')
})
//define the about page route
router.get('/about', (req, res) => {
    res.send('about shop')
})
//define the blogpost page route
router.get('/shoppost', (req, res) => {
    res.send('shoppost page')
})
//import in main.js file.
module.exports = router