#!/bin/bash

docker build -t nodejs .
docker run -it -p 80:8080 -d --name lala nodejs 
