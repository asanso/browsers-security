var express = require("express");

var app = express();

var resource = {
	"name": "Protected Resource"
};

app.get("/helloWorldJson", function(req, res){
  res.json(resource);
}

var server = app.listen(9002, 'localhost', function () {
  var host = server.address().address;
  var port = server.address().port;
});
