var http = require("http");

var PORT = 7000;

function handleRequest(request, response)
  {
      response.end("It's almost over Dude!: " + request.url);
  }

  var server = http.createServer(handleRequest);

  server.listen(PORT, function() 
        {
            console.log("Serer listening on : http://localhost: " + PORT);
        });
