var mongoose = require('mongoose');

//create Todo model: validation
//model: name of model, obj model has property
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    defaut: false
  },
  completedAt: {
    type: Number,
    defaut: null
  }
});

// //create a Todo
// var newTodo2 = new Todo({
//   text: '  Feed the cat',
//   completed: true,
//   completedAt: 123
// });
//
// //add a Todo: save return a promise
// newTodo2.save().then((doc)=>{
//   // console.log('Save todo', doc);
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) =>{
//   console.log('Unable to save todo', e);
// });


module.exports = {Todo};
