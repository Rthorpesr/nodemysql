var http = require("http");

var PORT = 8080;

function handleRequest(request, response)
  {
      response.end("It WOrks!! Path hit: " + request.url);
  }

  var server = http.createServer(handleRequest);

  server.listen(PORT, function() 
        {
            console.log("Serer listening on : http://localhost: " + PORT);
        });



        //http://localhost:8080/ place this in the browser.
        // localhost can be replaced with 127.0.0.1