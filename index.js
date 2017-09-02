var express = require('express');
var handler = require('./handler');
var database = require('./database');

var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  event = {};
  context = {};
  handler.hello(event, context, (err, data) => {
    res.status(data.statusCode);
    res.send(data.body);
  });
});

app.get('/api/notes/', (req, res) => {
  event = {};
  context = {};
  database.get_notes(event, context, (err, data) => {
    res.status(data.statusCode);
    res.send(data.body);
  });
});

const port = 8080;

app.listen(port, function () {
  console.log('sever listening on port ' + port);
});
