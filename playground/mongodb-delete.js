// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });
  db.collection('Users').deleteMany({name: 'Jim Smith'});

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("5a37f9800137c2170aa595df")
  }).then((results) => {
    console.log(JSON.stringify(results,undefined,2));
  })

  db.collection('Users').deleteOne({name: 'Jim'}).then((results) => {
    console.log(result);
  })
  //5a37f9800137c2170aa595df



  // db.close();
});
