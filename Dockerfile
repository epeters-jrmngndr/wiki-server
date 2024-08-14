# syntax=docker/dockerfile:1
FROM python:3.10-alpine
WORKDIR /wiki-server
RUN apk add --no-cache gcc musl-dev linux-headers nginx npm nodejs
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
EXPOSE 8080
COPY requirements.txt .
RUN mkdir wiki_server
COPY wiki_server/server.py wiki_server/
RUN mkdir frontend
COPY frontend/ frontend/
COPY nginx.conf /etc/nginx/nginx.conf
COPY run-full.sh run-full.sh
RUN chmod +x /wiki-server/run-full.sh
RUN cd frontend; npm install
RUN sed -i "s/9090/8080/" /wiki-server/frontend/src/constants.js
# The sleep allows the Backend to start first
# This makes the startup sequence output look more neat
CMD ["/wiki-server/run-full.sh"]