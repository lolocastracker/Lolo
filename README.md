# **LoLoLocator**

## What is LoLoLocator?


## How to set it up?

### Windows

1) Download Desktop Docker Hub
2) Open up your terminal and navigate to Lolo folder and run create.bat file.  
```bash
  create.bat
```
3) Once all the containers are up and running, navigate to localhost:3000 on your web browser
4) Set up MySQL database and populate the tables and datasets
### Linux



## Set up MySQL database
1) Open your terminal and run the following commands. Make sure your path can find lolodb.sql and datascript.sql files
```bash
  docker exec -i db mysql -uroot -ptestpass mysql < lolodb.sql
  docker exec -i db mysql -uroot -ptestpass mysql < datascript.sql
```
2) 

