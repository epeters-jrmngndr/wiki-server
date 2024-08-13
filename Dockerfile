# syntax=docker/dockerfile:1
FROM python:3.10-alpine
WORKDIR /wiki-server
RUN apk add --no-cache gcc musl-dev linux-headers nginx npm nodejs
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
EXPOSE 8080
COPY requirements.txt .
COPY wiki_server/server.py .
RUN mkdir frontend
COPY frontend/ frontend/
RUN cd frontend; npm install
# The sleep allows the Backend to start first
# This makes the startup sequence output neater
CMD fastapi dev server.py --host 0.0.0.0 --port 9090 & sleep 3; cd frontend; npm run dev