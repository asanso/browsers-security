var express = require("express");
var app = express();

var resource = {
	"helloWorld" : ""
};

app.get("/", function(req, res){

  if (req.query.name) {	
  	 res.send('{"helloWorld": "'+req.query.name+'"}');
  } else if (req.query.surname) {
  	 resource.helloWorld = req.query.surname;
	   res.json(resource);
  } else if (req.query.title) {
  	 res.send('{"helloWorld": "'+req.query.title+'"}');
  }
});

var server = app.listen(9002, 'localhost', function () {
  var host = server.address().address;
  var port = server.address().port;
});
