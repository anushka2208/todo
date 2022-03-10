const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({

    description:{
        type: String
    },

    category: {
        type: String
    },

    due_date: {
        type: String
    }

    
});

const TodoList = mongoose.model('TodoList',todoSchema);

module.exports = TodoList;