npx create-react-app my-app
docker stop backend
docker rm backend
docker stop frontend
docker rm frontend
docker stop db
docker rm db
docker stop nginx
docker rm nginx
docker network create -d bridge my-net
docker-compose -f ./docker-compose.yml build
docker-compose -f ./docker-compose.yml up
