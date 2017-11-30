// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT_G = 7000;
var PORT_B = 7500;

// Create a generic function to handle requests and responses
function handleRequestG(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("Good for you!");
}

function handleRequestB(request, response){
  response.end("Sucks to be you!");
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.


// Start our server so that it can begin listening to client requests.



function runServer(PORT){

  switch(PORT){
    case PORT_G:
    var server = http.createServer(handleRequestG);
    break;

    case PORT_B:
    var server = http.createServer(handleRequestB);
  }

  server.listen(PORT, function() {
    
      // Log (server-side) when our server has started
      console.log("Server listening on: http://localhost:" + PORT);
    });
}

runServer(PORT_G);
runServer(PORT_B);