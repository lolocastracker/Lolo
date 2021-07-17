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
docker stop db
docker rm db
docker stop nginx
docker rm nginx
docker stop lolo_mybb_1
docker rm lolo_mybb_1
docker stop mybb
docker rm mybb

docker stop session
docker rm session
docker stop lolo_redis_1
docker rm lolo_redis_1
docker stop lolo_adminer_1
docker rm lolo_adminer_1
docker stop keycloak
docker rm keycloak

docker network create -d bridge my-net
sleep 2
docker-compose -f ./docker-compose.yml up
