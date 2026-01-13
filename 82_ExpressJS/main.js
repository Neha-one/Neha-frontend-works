//import express in file.
const express = require('express')
//app=my server , calling express
const app = express()
const port = 3000 //door number of server

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('About me!')
})

app.get('/contact', (req, res) => {
    res.send('contact me!')
})

app.get('/neha', (req, res) => {
    res.send('Hello miss neha!')
})
//logic to fetch blog from db.
app.get('/blog', (req, res) => {
    res.send('Hello blog!')
})

//parameters: queries:
app.get('/blog/:slug', (req, res) => {
    console.log(req.params);// will output { slug: 'intro-to-js' }
    console.log(req.query);// will output 'mode=dark&region=in'

    res.send(`hello ${req.params.slug}`)
})

// app.get('/blog/intro-to-js', (req, res) => {
//     res.send('Hello intro-to-js!')
// })


// app.get('/blog/cpp', (req, res) => {
//     res.send('Hello cpp!')
// })

app.get("/blog/:slug/:second", (req, res) => {
    res.send(`hello ${req.params.slug} and ${req.params.second}`)
})
// app.get('/blog/intro-to-js/basics', (req, res) => {
//     res.send('Hello basics of js!')
// })

//starting of server.
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


