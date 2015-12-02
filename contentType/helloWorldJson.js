var express = require("express");
var app = express();

var resource = {
	"helloWorld" : ""
};

app.get("/", function(req, res){
  var name = req.query.name;
  resource.helloWorld = name;

  res.send('{"helloWorld": "'+name+'"}');
  //res.json(resource);

});

var server = app.listen(9002, 'localhost', function () {
  var host = server.address().address;
  var port = server.address().port;
});
