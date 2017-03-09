// mongoose configuration
var mongoose = require('mongoose');

//configuration mongoose
mongoose.Promise = global.Promise; //mongoose support callback by defaut, promise is callback and easy to chaine
mongoose.connect('mongodb://localhost:27017/TodoApp'); //maintent the connection all the time

module.exports = {mongoose};
