// const MongoClient = require('mongodb').MongoClient;// to connect with mongodb
const {MongoClient, ObjectID} = require('mongodb');
//TodoApp: is new created DB
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

// //deleteMany
// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) =>{
//   console.log(result);
// });

// // //deleteOne: delete the 1st one
// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) =>{
//   console.log(result);
// });

//findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) =>{
//   console.log(result);
// })

// db.collection('Users').deleteMany({name: 'xia'})
db.collection('Users').findOneAndDelete({
  _id: new ObjectID('58c08f3a6ec80c041e7ea34d')
}).then((result) =>{
  console.log(JSON.stringify(result, undefined, 2));
})

  // db.close();
});
