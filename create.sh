#!/bin/bash
#npx create-react-app my-app
sudo docker stop backend
sudo docker rm backend
sudo docker stop db
sudo docker rm db
sudo docker network create -d bridge my-net
sudo docker-compose -f ./docker-compose.yml build
sudo docker-compose -f ./docker-compose.yml up
