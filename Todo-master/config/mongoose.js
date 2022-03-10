const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todolist_db');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'Error in connecting to db'));

db.once('open',function(){
    console.log("Sucessfully connected to db");
});