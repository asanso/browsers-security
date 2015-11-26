var express = require("express");
var app = express();

app.get("/helloWorld.json", function(req, res){
  var name = req.query.name;
  res.send('{"helloWorld": "'+name+'"}');
});

var server = app.listen(9002, 'localhost', function () {
  var host = server.address().address;
  var port = server.address().port;
});
