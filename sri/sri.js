var express = require("express");

var app = express();

app.use('/', express.static('files'));

var server = app.listen(9002, 'localhost', function () {
  var host = server.address().address;
  var port = server.address().port;
});
