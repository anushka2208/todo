
// const {TodoList} = require('../assets/js/todo_list.js');

const db = require('../config/mongoose');

const TodoList = require('../models/todolist');

module.exports.home = function(request,response){

    TodoList.find({},function(err,todolist){

        if(err){
            console.log("Error in fetching the tasks");
            return;
        }

        return response.render('home',{
            title: 'TODO APP',
            todo_list: todolist
            
        });

    });

    // return response.render('home',{
    //     title: 'TODO APP',
    //     todo_list: TodoList
        
    // });
}

