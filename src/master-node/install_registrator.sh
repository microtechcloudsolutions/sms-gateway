#!/bin/bash
# echo "====" $1 $2 $3 $4 "===="
docker run -d \
    --name=registrator \
    --net=host \
    --volume=/var/run/docker.sock:/tmp/docker.sock \
    gliderlabs/registrator:master \
      consul://localhost:8500