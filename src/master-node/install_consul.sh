#!/bin/bash

# "skip_leave_on_interrupt": true
docker run -d -p 8500:8500 --name=consul --net=host consul agent -server -advertise 127.0.0.1