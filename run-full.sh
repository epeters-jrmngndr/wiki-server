#!/bin/sh
# start backend
fastapi dev wiki_server/server.py --host 0.0.0.0 --port 9090 &
FASTAPI_PID=$!
sleep 3

# start frontend
cd frontend
npm run dev --host &
NPM_PID=$!

nginx

wait $FASTAPI_PID
wait $NPM_PID
