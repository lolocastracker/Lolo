



Set up MySQL for Services:
	* When accessing MySQL from the database, make sure that they are using a user other than root for security purposes. 
	* open up your terminal and go into mysql container in Docker
		docker exec -t -i db /bin/bash
	* Then do these commands:
		terminal> mysql -u root -p 
		Enter password: testpass

	** NOTE 1 - you need to find the HOSTNAME of the services that is using MySQL. 
	** TO do that, open up another terminal then access the container in Docker
	** To acess MyBB container:
		terminal> docker exec -it lolo_mybb_1 sh
				
		** Note that instead of your terminal path, you will have 'somestring'@'someNumber'
		...@someNumber> cat /etc/hosts
	* The terminal will show a series of IP address. Use the IP address where the second column number coresspond to 'someNumber' on your terminal.
	  That is your HOSTNAME for every container.
	** NOTE 2 - WHEN YOU SHUT DOWN YOUR DOCKER, THE CONTAINER HOSTNAME CHANGES. SO, YOU MIGHT HAVE PERMISSION PROBLEMS. 
	** WHEN THIS HAPPENS. TO AVOID CHANGING THE HOSTNAME OF YOUR DATABASE EACH TIME, TRY PUTTING THE HOSTNAME AS '%' WHEN CREATING YOUR USER IN MYSQL.

	mysql> CREATE USER 'mytestuser'@'HOSTNAME' IDENTIFIED BY 'mypassword';
	mysql> GRANT ALL PRIVILEGES ON * . * TO 'mytestuser'@'HOSTNAME';
	mysql> exit

	ex: 
		mysql> CREATE USER 'mytestuser'@'%' IDENTIFIED BY 'mypassword';
		mysql> GRANT ALL PRIVILEGES ON * . * TO 'mytestuser'@'%';
		mysql> FLUSH PRIVILEGES;  
		mysql> exit;  	
Add Tables In MySQL:
	* Open up your terminal
		terminal> docker exec -t -i db /bin/bash
		terminal> mysql -u root -p 
		Enter password: testpass
		mysql> use lolo_db;
	* Then copy and paste MySQL script (lolodb.sql) to create the each table. Make sure you do each table in order.
		
	
Set up MyBB
	* run this if there you haven't installed mybb in Docker
		docker-compose -f ./docker-compose.yml build
	* Once Docker compiles, access the forum 
		localhost:8080
	* It will take you to the MyBB installation if you haven't installed it already
		This is MyBB installation's directions: https://docs.mybb.com/1.8/install/
	* When you get to the Database Configuration:
		For Database Server Hostname, put that as the MySQL HOSTNAME:3306 or db (as defined in the docker-composed.yml file) 
		Database Username: mytestuser
		Database Password: mypassword
	* In the board configuration:
		For Forum Name: LoLo Forums
		Forum URL: localhost:8080
		Website Name: LoLo Locator
		Website URL: localhost:3000 
		Leave Cookie Domain and Path to default. 
		Contact Email: lolo.locusts@gmail.com
	* In the Admin User
		Username: admin
		Password: mypass
		email: lolo.locusts@gmail.com

	* And you are done
	** Note: If you messed up on some of the setting, it is fine. You can change it by opening up your project, go to mybb > inc > settings.php or mybb > inc > config.php

	To enable Anonymous User in MyBB:
	* Login in as admin
	* Click on adminCP
	* Users & Groups -> Groups -> Guests -> Forums & Posts
	* Make sure that under the posting/rating option these are checked:
		- can post new threads?
		- can post replies to threads?

	* If while you are enabling for Anonymous User rights, you ran into a "MyBB SQL Error", and on your terminal, MySQL has a " Got error 127 when reading table './lolo_db/mybb_adminsessions'" fix this by:
		1) access MySQL container in Docker
		2) access mysql as root user
		3) enter the following commands;
			mysql> use lolo_db;
			mysql> REPAIR TABLE mybb_adminsessions;




Populate your database:
1) Open terminal where datascript.sql file is at
2) docker exec -i db mysql -uroot -ptestpass mysql < datascript.sql 
** Note: This will take around ~3-10 minutes. Also, whatever data you have in your lolo_locust, lolo_report, lolo_locust_in_report, lolo_location will be erased. If you don't want that, then open datascript.sql and comment out line 2-7.
** Note: db will return this error at the end
	ERROR 1452 (23000) at line 37361: Cannot add or update a child row: a foreign key constraint fails (`lolo_db`.`lolo_location`, CONSTRAINT `lolo_location_ibfk_1` FOREIGN KEY (`reportId`) REFERENCES `lolo_report` (`reportId`))
	This error happens because you have more location entries than reports. Ignore this error.
** Note: after successful population of the tables, you should have
			mysql> SELECT COUNT(*) FROM lolo_report;
			+----------+
			| COUNT(*) |
			+----------+
			|    10006 |
			+----------+

			mysql> SELECT COUNT(*) FROM lolo_location;
			+----------+
			| COUNT(*) |
			+----------+
			|    10006 |
			+----------+

			mysql> SELECT COUNT(*) FROM lolo_locust;
			+----------+
			| COUNT(*) |
			+----------+
			|        3 |
			+----------+

			mysql> SELECT COUNT(*) FROM lolo_locust_in_report;
			+----------+
			| COUNT(*) |
			+----------+
			|    17338 |
			+----------+