#!/bin/bash

# "skip_leave_on_interrupt": true
docker run -d -p $1:$2 --name=consul --net=host consul agent -server -advertise