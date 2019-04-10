#!/bin/bash

echo "**===============installing docker compose==============**"
echo "=================downloading diocker compose============"
sudo curl -L https://github.com/docker/compose/releases/download/1.21.2/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
echo "=================setting permissions===================="
sudo chmod +x /usr/local/bin/docker-compose
echo "=================docker compose version================="
docker-compose --version