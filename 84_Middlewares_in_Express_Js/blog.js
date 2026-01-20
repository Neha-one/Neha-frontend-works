const exp = require('express')
const router = exp.Router()

router.get('/', (req, res) => {
    res.send("home page")
})
router.get('/about', (req, res) => {
    res.send("about page")
})
router.get('/info', (req, res) => {
    res.send("info page")
})

module.exports = router;