const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  path = require('path');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended : true }));

app.use(express.static('www'));

// app.post('/form', function(req, res) {
//   res.setHeader('Content-Type', 'application/json');
//
//   res.body
//
// });

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
