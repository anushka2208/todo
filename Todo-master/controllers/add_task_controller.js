

// const { TodoList } = require('../assets/js/todo_list.js');

const db = require('../config/mongoose');

const TodoList = require('../models/todolist');

module.exports.addTask = function(request,response){

    // console.log(request.body);
   

    var due = request.body.due_date;
    // console.log(due);

    if(due != ""){
        // console.log(due);
        due = changeInDateFormat(due);
    }    
    TodoList.create({
        description: request.body.description,
        category: request.body.category,
        due_date: due,
    },function(err,newTask){
        if(err){
            console.log("Error in creating the contact");
            return;
        }

        console.log("*****",newTask);
        return response.redirect('back');
    });

    // return response.redirect('back');
}

function changeInDateFormat(due_date){

    due_date = due_date.split("-");
    var ans;
    if(due_date[1] == 01){
        ans = "Jan ";
    }

    else if(due_date[1] == 02){
        ans = "Feb ";
    }

    else if(due_date[1] == 03){
        ans = "Mar ";
    }

    else if(due_date[1] == 04){
        ans = "Apr ";
    }

    else if(due_date[1] == 05){
        ans = "May ";
    }

    else if(due_date[1] == 06){
        ans = "Jun ";
    }

    else if(due_date[1] == 07){
        ans = "Jul ";
    }

    else if(due_date[1] == 08){
        ans = "Aug ";
    }

    else if(due_date[1] == 09){
        ans = "Sep ";
    }

    else if(due_date[1] == 10){
        ans = "Oct ";
    }

    else if(due_date[1] == 11){
        ans = "Nov ";
    }

    else if(due_date[1] == 12){
        ans = "Dec ";
    }

    ans+=due_date[2]+", ";
    ans+=due_date[0];

    return ans;
}
