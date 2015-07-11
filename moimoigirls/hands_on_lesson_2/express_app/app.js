var express = require('express');
var body_parser = require('body-parser');
var app = express();

app.use(body_parser.urlencoded({ extended: true }));

// A browser's default method is 'GET', so this
// is the route that express uses when we visit
// our site initially.
app.get('/', function(req, res){
  // The form's action is '/' and its method is 'POST',
  // so the `app.post('/', ...` route will receive the
  // data sent in the form, the name of the imput field is
  // where the data is stored
  var html = '<form action="/" method="post">' +
               '<input type="text" name="user_name" placeholder="Enter your name" />' +
               '<button type="submit">Submit</button>' +
              '</form>';

  res.send(html);
});

// Method POST receives the data posted
// We use the 'body-parser' module so
// that 'req.body' will be filled in with the form elements
app.post('/', function(req, res){
  var user_name = req.body.user_name;
  console.log("From the user form, user_name is: ", user_name)
  var html = '<h3>Hello: ' + user_name + '</h3>' +
             '<a href="/">Try again.</a>';
  res.send(html);
});

app.listen(3000, function(){
  console.log("YEY! server is running on localhost:3000")
});