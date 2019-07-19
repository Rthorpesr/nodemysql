# nodemysql
Author: Reginald D. Thorpe

Date: July 19, 2019

Reason: 7th week of Coding Bootcamp at GWU

Purpose: Create an Amazon-like storefront with the MySQL skills learned this unit. The app will take in orders from customers and deplete 
stock from the store's inventory.

Technology and tools use: Node.js, MySql, MySql Workbench, Inquirer.

Challenge: The most difficult challenge was trying to figure out when to do the update to the database and then start the whole process 

over. I overcame this challenge by calling the function that asks the user for input right in the “promise” routine in the function. 


Steps taken:

1.)	I created a database using the MySql Workbench

2.)	I create a products table with various column names to hold inputs such as: Product_id, Item_number, Product_Description, stock 

quantity, and Price for each item.

3.)	I then loaded 10 new entries in the table using the insert into table command,

4.)	Next, I wrote the server app to ensure I could connect to the database. I tested the connection and make sure the server was 

listening on the correct Port.

5.)	I then coded my Customer.js file. The following is the logic in this file:

a.)	Command line prompt for asking the user for the “ID of the product they would like to buy.”

b.)	The prompt them for “how many units of the product they would like to buy.

c.)	Once the customer has placed the order, 

a.	The application checks to see if the store has enough of the product to meet the customer's request.

i.	If not, the app console logs the phrase, “Sorry, there isn't enough of that item in stock!”, and then prevent the order from going 

through.

6.)	However, if your store does have enough of the product, the order is fulfill and the
SQL database is updated to reflect the remaining quantity.
     Once the update goes through, the customer is shown the total cost of their purchase.

