docker stop backend
docker rm backend
docker stop db
docker rm db
docker network create -d bridge my-net
docker-compose -f ./docker-compose.yml build
docker-compose -f ./docker-compose.yml up
