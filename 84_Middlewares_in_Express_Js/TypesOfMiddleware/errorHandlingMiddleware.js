const exp = require('express')
const app = exp()
const port = 3000

app.get('/', (req, res) => {
    throw new Error("home route error");
});

// Error-handling middleware (always LAST)
app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).send("something went wrong!")
});

app.listen((port), () => {
    console.log(`example app listening on port ${port}`);
});