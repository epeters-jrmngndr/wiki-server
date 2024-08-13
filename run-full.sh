#!/bin/bash
trap terminate SIGINT
terminate(){
    pkill -SIGINT -P $$
    exit
}
./run-server.sh &
./run-frontend.sh &
wait
