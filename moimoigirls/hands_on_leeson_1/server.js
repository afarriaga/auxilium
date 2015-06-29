//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
const PORT=8080;

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

function handleRequest(POST, create_file);

//Create a server
var server = http.createServer(handleRequest);


var create_hoodie_app = function(){
  // Code to create a hoodie app from command line
}


//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});