//Lets require/import the HTTP module
var http = require('http');
var url = require('url');
var nosql = require('nosql').load('database.nosql');

//Lets define a port we want to listen to
const PORT=9002; 

//We need a function which handles requests and send response
function handleRequest(request, response){
	var url_parts = url.parse(request.url, true);
	var query = url_parts.query;
	//response.setHeader('Content-Type', 'text/plain');
	//response.setHeader('X-Content-Type-Options', 'nosniff');
    if (query.name) {
    	nosql.insert(query.name);
    	response.writeHead(302,
 		 {Location: '/'}
		);
		response.end();
    } else {    	
    	nosql.one(function(name) {
    		return name; ;
    	},function(err, name) {
		if (name) {			 
			nosql.clear();
			response.end('Hello World '+name);

			return;
		} else {			 
			response.end('Hello World');
			return;
		}});
    }
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});