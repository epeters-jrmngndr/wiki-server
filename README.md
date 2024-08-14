# Wiki Server (Basic)

A simple implementation of an in-memory wiki server, storing Markdown documents by name.

The project includes a UI, and is dockerized.

## Technology Stack

This project uses:

* Python 3.10
  * FastAPI
  * PyTest
* ReactJS 18.3
  * Vite
  * Jest
* Docker
* Nginx (as a reverse proxy)

## Setup
```bash
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt

cd wiki_frontend/
npm install
```

## Running and Testing

Convenience scripts are provided for running and testing the server.

### Running

`run-server.sh` starts the server (only), which runs dev mode by default. It starts on port 9090.

`run-frontend` starts the frontend (only), which also runs in dev mode.

`run-tests.sh` invokes both `pytest`, which tests the backend, and `npm test` (inside the `frontend/` directory).

`run-full.sh` starts both services locally.

### Running and Building docker

`build.sh` builds the docker container, and `run-container.sh` starts it.

## Documentation

As the underlying server uses Python's FastAPI, a /docs routed is automatically populated with each available route, describing its parameters and return values.

You can access it at http://localhost:9090/docs, or http://localhost:9090/redoc (for the alternate ReDoc format).

ViteJS was used to provision the frontend, which is implemented with React. The UI is tested with Jest.
