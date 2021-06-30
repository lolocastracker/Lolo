#!/bin/bash
sudo docker stop map
sudo docker rm map
sudo docker stop comm
sudo docker rm comm
sudo docker stop user
sudo docker rm user
sudo docker stop react
sudo docker rm react

sudo docker stop mapdb
sudo docker rm mapdb
sudo docker stop commdb
sudo docker rm commdb
sudo docker stop userdb
sudo docker rm userdb
sudo docker stop nginx
sudo docker rm nginx
#npm install --prefix react 
#npm install react-scripts@3.4.1 -g --prefix react 

sudo docker network create -d bridge my-net
sudo docker-compose -f ./docker-compose.yml build
sudo docker-compose -f ./docker-compose.yml up
