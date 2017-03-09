// const MongoClient = require('mongodb').MongoClient;// to connect with mongodb
const {MongoClient, ObjectID} = require('mongodb');
//TodoApp: is new created DB
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');


// //findOneAndUpdate
// db.collection('Users').findOneAndUpdate({
//   _id: new ObjectID('58c08f016ec80c041e7ea336')
// },{
//   $set:{
//     completed: true
//   }
// },{
//     returnOringal: false
//   }).then((result) => {
//     console.log(result);
//   })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('58c087ad656574225cafb106')
  },{
    $set:{
      name: 'Xia'
    },
    $inc: {
      age: 1
    }
  },{
      returnOringal: false
    }).then((result) => {
      console.log(result);
})


  // db.close();
});
