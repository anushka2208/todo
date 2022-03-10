const express = require('express');

// const db = require('./config/mongoose');

const app = express();
const port = 8000;


app.use('/',require('./routes/index'));

app.use(express.static('assets'));

app.set('view engine','ejs');
app.set('views','./views');

// app.use(express.urlencoded());

app.listen(port,function(err){
    if(err){
        console.log(`Error on running the server: ${err}`);
        return;
    }

    console.log(`Server is running on the port: ${port}`);
});