//Lets require/import the HTTP module
var http = require('http');
var fs = require('fs');

//Lets define a port we want to listen to
const PORT=8080;

//We need a function which handles requests and send response
function handleRequest(request, response){
  // Modules that you can use to parse the body of the form
  // query string, body parser or others
  // alternatively you can use request module to handle requests.
  // http://stackoverflow.com/questions/4295782/how-do-you-extract-post-data-in-node-js
  console.log('It Works!! Path Hit: ' + request.url);

  fs.readFile('./index.html', function(error, content) {
    if (error) {
      // 500 = internal server error
      response.writeHead(500);
      // ends the response
      response.end();
    }
    // all good
    else {
      // 200 = 0k status
      response.writeHead(200, { 'Content-Type': 'text/html' });
      // responde with contet to the user
      response.end(content, 'utf-8');
    }
  });
}

//Create a server
var server = http.createServer(handleRequest);

/*var create_hoodie_app = function(){
  // Code to create a hoodie app from command line
  console.log("creating hoodie app...")
};*/

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});