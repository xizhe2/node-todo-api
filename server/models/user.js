var mongoose = require('mongoose');

//user
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

// var user = new User({
//   email: 'xxa@gmail.com'
// });
//
// user.save().then((doc) => {
//   console.log('User saved', doc);
// }, (e) =>{
//   console.log('Unable to save user', e);
// });

module.exports = {User};
