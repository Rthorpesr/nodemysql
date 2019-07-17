var http = require("http");

var PORT1 = 7000;

function handleRequest1(request, response)
  {
      response.end("It's almost over Dude!: " + request.url);
  }

  var server = http.createServer1(handleRequest1);

  server.listen(PORT1, function() 
        {
            console.log("Serer listening on : http://localhost: " + PORT1);
        });

       
        var http = require("http");

        var PORT2 = 7500;
        
        function handleRequest2(request, response)
          {
              response.end("5 more weeks: " + request.url);
          }
        
          var server = http.createServer2(handleRequest2);
        
          server.listen2(PORT2, function() 
                {
                    console.log("Server listening on : http://localhost: " + PORT2);
                });