const mongoose = require('mongoose');
// create schema for todo list
const todoSchema = new mongoose.Schema({
    desc: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    dueDate: {
        type: String,
        required: true
    }
})

const TodoLists = mongoose.model('TodoLists', todoSchema);
module.exports = TodoLists;