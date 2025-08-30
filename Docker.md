#running the script inside the docker container

source .env
docker exec -i db mysql -u root -p" $MYSQL_ROOT_PASSWORD" lolo_db < /;lolodb.sql