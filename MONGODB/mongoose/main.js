// // https://www.npmjs.com/package/mongodb

// import mongoose from 'mongoose';
// import express from 'express';
// import { Todo } from "./models/Todo.js";

// let conn = await mongoose.connect("mongodb://localhost:27017/todo")

// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//     const todo = new Todo(
//         {

//             desc: "description",
//             isDone: false,
//             days: Math.floor(Math.random() * 45 + 5 * Math.random())
//         })
//     todo.save()
//     res.send("hello world!");
// })
// app.get('/a',async (req, res) => {
//     let todo = await Todo.findOne({})
//     res.json({ title: todo.title, desc: todo.desc })
//     console.log(todo)
// })


// app.listen(port, () => {
//     console.log(`Example app listing on port ${port}`);

// })


import mongoose from 'mongoose';
import express from 'express';
import { Task } from './models/Todo.js';

let conn = await mongoose.connect("mongodb://localhost:27017/db")
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const newTask = new Task({
        desc: "this is my mongoose practice",
        isDone: true,
        days: Math.floor(Math.random() * 5 + Math.random()),
        Date: new Date()
    })
    newTask.save();
    res.send("hello world")
})
app.get('/update', async (req, res) => {
    let finddata = await Task.updateOne({ desc: "this is my mongoose practice" }, { $rename: { "desc": "description" } })
    // res.json({ title: finddata.title, desc: finddata.desc, Data: Date.finddata, days: finddata.days });
    res.json(finddata)
})

app.listen(port, () => {
    console.log('example app listing on port 3000.....');

})