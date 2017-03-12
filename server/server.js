
// this file is responsible to thr routs only: so need to install express, body-parser

//import lib
var express = require('express');
var bodyParser = require('body-parser');

//to require the our modules
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {user} = require('./models/user');

//creat our app by calling express() and stored it obj app
var app = express();

//middleware: bodyParser take json turn to an obj and attached to req obj..
app.use(bodyParser.json());

//creat new ressouce -> post,send the ressouce as a body: send a json obj over the server,
//which has text property, server gets that text property to creat a new model,
//with complete id/property/body to send back to client
//creat post routs:  url: creat ressouce;  callback function
app.post('/todos', (req, res)=>{
  // console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });

//save the todo model in db, then provide secess and error cas
  todo.save().then((doc)=>{
    res.send(doc); //if secess, will send back the todo
  }, (e)=>{
    res.status(400).send(e); //if err, will send back the e or send back the http status
  });
});



app.listen(3000, () =>{
  console.log('Started on port 3000');
});


module.exports = {app};
