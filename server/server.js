
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

//creat routs
app.post('/todos', (req, res)=>{
  console.log(req.body);
});



app.listen(3000, () =>{
  console.log('Started on port 3000');
});
