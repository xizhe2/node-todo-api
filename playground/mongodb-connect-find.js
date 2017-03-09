// const MongoClient = require('mongodb').MongoClient;// to connect with mongodb
const {MongoClient, ObjectID} = require('mongodb');
//TodoApp: is new created DB
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');


// db.collection('Todos').find({
//   // completed: false}).toArray().then((docs) =>{
//   _id: new ObjectID('58c07e54e9bf7318b8ed2ec8')}).toArray().then((docs) =>{
//   console.log(('Todos'));
//   console.log(JSON.stringify(docs, undefined,2));
// }, (err) =>{
//   console.log('Unable to fetch todos', err);
// });

// //then pass a promise instead of a callback
// db.collection('Todos').find().count().then((count) =>{
//   console.log(`Todos count: ${count}`);
// }, (err) =>{
//   console.log('Unable to fetch todos', err);
// });


db.collection('Users').find({name: 'xia'}).toArray().then((docs) =>{
  console.log(JSON.stringify(docs, undefined,2));
});

  // db.close();
});
