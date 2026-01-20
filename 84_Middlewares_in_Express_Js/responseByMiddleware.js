const exp = require('express')
const app = exp()
const port = 3000;

//middleware 1
app.use((req, res, next) => {
    console.log('m1');
    //response send by here; and end of res.
    res.send("Hii response sending by middleware 1.")
})
//middleware 2
//  IT WILL NOT RUN CAUSE THERE IS NO NEXT() IN 1ST MIDDLEWARE.
app.use((req, res, next) => {
    console.log('m2');
    res.send("Hii response sending by middleware 2.")
})

app.listen((port), () => {
    console.log(`example app listening on port ${port}`);

});