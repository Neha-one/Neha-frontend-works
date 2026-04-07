import mongoose from 'mongoose';
import express from 'express';
import { Task } from './models/Todo.js';

const app = express();
const port = 3000;
app.use(express.json());

let conn = await mongoose.connect("mongodb://localhost:27017/taskdb")

//post:-
app.post('/tasks', async (req, res) => {
    const newTask = new Task(req.body);
    await newTask.save();
    res.send("Task saved");
});

//get (show)
app.get('/tasks', async (req, res) => {
    let data = await Task.find();
    res.json(data);
})

//update
app.put('/tasks',)
app.listen(port, () => {
    console.log('Example running........');
});