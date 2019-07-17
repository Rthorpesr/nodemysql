var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection(
    {
        host: "localhost",
        port: 3306,
        user: "root",

        password: "Marine6226@@",
        database: "bamazon"
    });



connection.connect(function(err)
   {
       if(err) throw err;
       console.log("connected as id " + connection.threadId);
       //connection.end();
       productInventorycheck();
    });

    var sequel = "Select * from products"

    var updateSQL = "update Owners set address = '809 Baltimore MD' where name = 'Thorpe'"; 
 /*
    function afterConnection1()
        {
            connection.query(sequel, function(err,res)
            {
        
                if (err) throw err;
                    console.log(res);
                    connection.end();
            
            });
        }
  */
 
        function  productInventorycheck()
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

            inquirer
                .prompt([
                  {
                     type:    "input",
                     name:    "item_id", 
                     message: "What is the product id of the item you want to purchase?",
                  },
                  
                  {
                     type:    "input",
                     name:    "quantity",
                     message: "How many do you want to purchase?",
                     validate: function(input) 
                                      {
                                        return!(isNaN(parseFloat(input))); 
                                      }    
                  }
                    
                ]).then(function(response)
                    {
                        connection.query("Select * From products Where item_id =" + response.item_id,
                    }
                
        }


/*
var mysql = require("mysql");

var connection = mysql.createConnection(
    {
        host: "localhost",
        port: 3306,
        user: "root",

        password: "Marine6226@@",
        database: "bamazon"
    });


    connection.connect(function(err)
    {
        if(err) throw err;
        console.log("connected as id " + connection.threadId);
        //connection.end();
        selectProducts();
     });


    var sequel = "Select * from Products"

    var updateSQL = "update Owners set address = '809 Baltimore MD' where name = 'Thorpe'"; 
 


    function selectProducts()
        {
            //connection.query(sequel, function(err,res)
            connection.query("select * from products", function(err,res) 
            {
        
                if (err) throw err;
                    console.log(res);
                    connection.end();
            
            });
        }

*/