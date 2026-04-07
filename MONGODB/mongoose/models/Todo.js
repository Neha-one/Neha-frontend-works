// import mongoose from "mongoose";

// const TodoSchema = new mongoose.Schema({
//     title: { type: String, required: true, default: "Myproject" },
//     desc: String,
//     isDone: Boolean,
//     days: Number
// });
// export const Todo = mongoose.model('Todo', TodoSchema)


import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    title: { type: String, required: true, default: "myProject" },
    desc: String,
    isDone: Boolean,
    days: Number,
    Date: Date
});

export const Task = mongoose.model("Task", TodoSchema);