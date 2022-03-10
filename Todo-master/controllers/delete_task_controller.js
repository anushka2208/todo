
// const {TodoList} = require('../assets/js/todo_list.js');

const db = require('../config/mongoose');

const TodoList = require('../models/todolist');

module.exports.deleteTask = function(request,response){

    // console.log(request.body);
    
    var req = request.body;

    if(Object.keys(req).length == 0){
        console.log("Empty");
        return response.redirect('back');
    }

    // console.log(typeof(req.checkbox));

    // if(typeof(req.checkbox) == 'string'){
    //     console.log("true");
    // }

    // else{
    //     console.log("false");
    // }

    if(typeof(req.checkbox) == 'string'){
        var id = req.checkbox;
        TodoList.findByIdAndDelete(id,function(err){
            if(err){
                console.log("Error in deleting the db");
                return;
            }
            
        });

        return response.redirect('back');
    }

    // console.log(req.checkbox);

    var checkboxList = req.checkbox;
    // console.log(checkboxList.length);


    for(let i=0;i<checkboxList.length;i++){
        var id = checkboxList[i];
        TodoList.findByIdAndDelete(id,function(err){
            if(err){
                console.log("Error in deleting the db");
                return;
            }
            
        });
    }    

    return response.redirect('back');
}
