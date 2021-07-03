#!/bin/bash
docker stop map
docker rm map
docker stop comm
docker rm comm
docker stop user
docker rm user
docker stop react
docker rm react

docker stop mapdb
docker rm mapdb
docker stop commdb
docker rm commdb
docker stop userdb
docker rm userdb
docker stop nginx
docker rm nginx

docker stop session
docker rm session
docker stop redis
docker rm redis

if [[ ! -d ./react/node_modules/ ]]
then
   npm install --prefix react 
   npm install react-scripts@3.4.1 -g --prefix react 
fi

docker network create -d bridge my-net
docker-compose -f ./docker-compose.yml build
docker-compose -f ./docker-compose.yml up
