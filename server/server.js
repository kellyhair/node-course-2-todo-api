const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {User} = require ('./models/user');
const {Todo} = require('./models/todo');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});



app.listen(3000, () => {
  console.log('Started on port 3000');
});





// OLD
//
//
// var newTodo = new Todo({
//   text: 'Something to do'
//
// });
//
// newTodo.save().then ((doc) => {
//   console.log(`Saved todo ${doc}`);
// }, (e) => {
//   console.log('Unable to save todo')
// });
//
// // User
// // email property - require it - trim it - set type - set min length of 1
//
//
//
// var User = new User({
//   userId: 'Kelly',
//   email: '  test1@test.com  '
// });
//
// User.save().then ((doc) => {
//   console.log(`Saved user ${doc}`);
// }, (e) => {
//   console.log('Unable to save user')
// });
