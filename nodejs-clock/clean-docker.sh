#!/bin/bash

docker rm -f $(docker ps -a)
docker rmi $(docker images)
