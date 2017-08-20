//https://www.sitepoint.com/use-jquerys-ajax-function/ - form2 reference

const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  path = require('path');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended : true }));

app.use(express.static('www'));

app.post('/form', function(req, res) {
  res.setHeader('Content-Type', 'application/json');

  res.send(JSON.stringify({
    inputName : req.body.inputName
  }));
  console.log('you posted: First Name: ' + req.body.inputName);
});

app.post('/form2',function(req, res){
	res.setHeader('Content-Type', 'application/json');

	//mimic a slow network connection
	setTimeout(function(){

		res.send(JSON.stringify({
			firstName: req.body.firstName || null,
			lastName: req.body.lastName || null
		}));

	}, 1000)

	//debugging output for the terminal
	console.log('you posted: First Name: ' + req.body.firstName + ', Last Name: ' + req.body.lastName);
});


app.listen(3000, function() {
  console.log('Listening on port 3000');
});
