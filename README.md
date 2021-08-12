# **LoLoLocator**

## What is LoLoLocator?


## How to set it up?

### Windows

1) Download Desktop Docker Hub
2) Open up your terminal and navigate to Lolo folder and run create.bat file.  
```bash
  terminal> create.bat
```
3) Once all the containers are up and running, navigate to localhost:3000 on your web browser
4) Set up MySQL database and populate the tables and datasets
### Linux



## Set up MySQL database
1) Open your terminal and access your db container. Make sure your terminal path is where the lolodb.sql file is
```bash
  terminal> docker exec -i db mysql -uroot -ptestpass mysql < lolodb.sql
  terminal> docker exec -i db mysql -uroot -ptestpass mysql < datascript.sql
```
2) 

