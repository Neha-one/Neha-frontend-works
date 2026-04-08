// // https://www.npmjs.com/package/mongodb

import mongoose from 'mongoose';
import express from 'express';
import { Task } from './models/Todo.js';

let conn = await mongoose.connect("mongodb://localhost:27017/db")
const app = express();
const port = 3000;


app.post('/', async (req, res) => {
    try {
        const newTask = new Task({
            desc: "this is my mongoose practice",
            isDone: true,
            days: Math.floor(Math.random() * 5 + Math.random()),
            Date: new Date()
        });
        await newTask.save();
        res.send("Task added successfully");
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.get('/getallData', async (req, res) => {
    const alldata = await Task.find()
    res.json(alldata)
})

app.get('/findData', async (req, res) => {
    let todotask = await Task.findOne({})
    res.json({ title: todotask.title, desc: todotask.desc })
    console.log(todotask)
})


app.put('/update', async (req, res) => {
    let updateddata = await Task.updateMany({ desc: "this is my mongoose practice" }, { $rename: { "desc": "description" } })
    res.json(updateddata)
})

app.listen(port, () => {
    console.log('example app listing on port 3000.....');

})



