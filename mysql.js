var mysql = require("mysql");

var connection = mysql.createConnection(
    {
        host: "localhost",
        port: 3306,
        user: "root",

        password: "Marine6226@@",
        database: "gamestop_db"
    });



connection.connect(function(err)
   {
       if(err) throw err;
       console.log("connected as id " + connection.threadId);
       //connection.end();
       afterConnection2();
    });

    var sequel = "Select * from products"

    var updateSQL = "update Owners set address = '809 Baltimore MD' where name = 'Thorpe'"; 

        function afterConnection2()
        {
            connection.query("select * from products", function(err,res)
            //connection.query("select * from ?", { name: "Thorpe"}, function(err,res)
           // connection.query("update game set ? where ?" , [{rating: "nc-17}"}, {name:"skyrim"} ], function(err, res)
           // connection.query("insert into game set ?", (name: "Fallout", genre: "RPG", rating: "M", publisher_id: 2 }, function(err, res)
           // connection.query("delete game set ? where ?" , [{rating: "nc-17}"}, {name:"skyrim"} ], function(err, res)
           
           {
        
                if (err) throw err;
                    console.log(res);
                    connection.end();
            
            });
        }