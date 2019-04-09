#!/bin/bash

# "skip_leave_on_interrupt": true
docker run -d -p 8500:8500 --name=consul --net=host consul agent -server -data-dir=/data -bind 0.0.0.0 -client 0.0.0.0 -bootstrap-expect=1