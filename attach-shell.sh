#!/bin/bash
docker exec -it $(docker ps | sed -n '2{s/CONTAINER ID *//;s/ .*//;p}') sh
