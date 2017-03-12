//mocha and nodemon no need required
const expect = require('expect');
const request = require('request');

//require the modules to test
const {app} = require('./../server');
const {Todo} = require('./../models/todo');

//describe blcok
