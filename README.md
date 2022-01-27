# **Lo-Lo: Locust Locator**

## What is Lo-Lo Locator?
Lo-Lo (https://lolo.gq/) is a one-stop-shop platform for rural East-African farmers to view, report, and discuss locust swarms in their area to tackle the threat of invasive species. We created Lo-Lo during the seven-week InternHacks program which began in June 2021.

The website was built with React (Fomantic-UI, Semantic-UI React), Flask, and MySQL, and is deployed using Docker, Cloudflare and Azure. User authentication is handled with Keycloak and the forum is an implementation from myBB.

Demonstration on YouTube presented at the InternHacks demo day:

[![Alt text](https://img.youtube.com/vi/hPAEG7aqRNE/0.jpg)](https://www.youtube.com/watch?v=hPAEG7aqRNE)

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
  docker exec -i db mysql -uroot -proot_pass mysql < lolodb.sql
  docker exec -i db mysql -uroot -proot_pass mysql < datascript.sql
  
  replace pass with password for root mysql user
```
Note): If you have ./env/.env file setup run this command. This will create a temp enviroment and utilze that to input your password
```
env $(cat ./env/.env | xargs) && docker exec -i db mysql -uroot -p$DB_ROOT_PASSWORD mysql < lolodb.sql
```
### Location API
```
You will need to utilize HERE Map API
https://developer.here.com/
250K Free Transaction a month
We Utilize the Following
    - Geocode
    - Reverse Geocode
    - AutoSearch
    - Each count as 1 per search, save for autosearch
    - https://knowledge.here.com/csm_kb?id=public_kb_csm_details&number=KB0016433
```
## Start
```
 cd into Folder
 rename .env_example to .env
 fill in variables
 docker-compose --env-file ./env/.env up
```
 
 ## Common Issues
 username already added to '/opt/jboss/keycloak/standalone/configuration/keycloak-add-user.json'
```
 recreate the image by running docker rm -f keycloak
 ```

 

