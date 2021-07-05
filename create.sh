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


docker network create -d bridge my-net
sleep 2
docker-compose -f ./docker-compose.yml up
