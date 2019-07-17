var express = require("express");

var app = express();
var PORT = 3000;

var yoda = 
    { 
        name: "Yoda",
        role: "Jedi Master",
        age: 900,
        forcePOints: 2000
    }

    var darthmaul =
        {
            name: "Darth Maul",
            role: "Sith Lord",
            age: 200,
            forcePoints: 1200
        }


        var Obi_Wan_Kenobi =
        {
            name: "Obi Wan Kenobi",
            role: "Jedi Master",
            age: 200,
            forcePoints: 1200
        }
//routes

app.get("/", function (reuest, response)
        {
            response.send("welcome to the Star Wars Page!");

        })

app.get("/yoda", function(request, response)
      {
          response.json(yoda);
      })

app.get("/darthmaul", function(request, response)
      {
          response.json(darthmaul);
      })  

app.get("/Obi Wan Kenobi", function(request, response)
      {
          response.json(Obi_Wan_Kenobi);
      })
 
app.listen(PORT, function()
      {
         console.log("App listening to PORT: " + PORT);
      })
