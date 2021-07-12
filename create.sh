#!/bin/bash
docker stop map
docker rm map
docker stop comm
docker rm comm
docker stop user
docker rm user
docker stop react
docker rm react

docker stop db
docker rm db
docker stop nginx
docker rm nginx
docker stop mybb
docker rm mybb

docker stop session
docker rm session
docker stop lolo_redis_1
docker rm lolo_redis_1
docker stop lolo_adminer_1
docker rm lolo_adminer_1

docker network create -d bridge my-net
sleep 2
docker-compose -f ./docker-compose.yml up
