//Lets require/import the HTTP module
var http = require('http');
var url = require('url');

//Lets define a port we want to listen to
const PORT=9002; 

//We need a function which handles requests and send response
function handleRequest(request, response){
	var url_parts = url.parse(request.url, true);
	var query = url_parts.query;
	//response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World'+query.name);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});