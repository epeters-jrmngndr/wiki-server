# Wiki Server (Basic)

A simple implementation of an in-memory wiki server, storing Markdown documents by name.

Articles do not persist through restarts.

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

cd frontend/
npm install
```

## Running and Testing

Convenience scripts are provided for running and testing the server.

### Running Locally

`run-server.sh` starts the server (only), which runs dev mode by default. It starts on port 9090.

`run-frontend` starts the frontend (only), which also runs in dev mode. It uses port 5173.

`run-full.sh` starts both services locally.

### Testing

`run-tests.sh` invokes both `pytest`, which tests the backend, and `npm test` (inside the `frontend/` directory), for the frontend.

### Running and Building docker

`build.sh` builds the docker container, and `run-container.sh` starts it.

When the container is running, the application is accessible at http://localhost:8080/

## Documentation

As the backend server uses Python's FastAPI, a /docs route is automatically populated, describing the schema, its parameters and return values of each endpoint.

You can access it at http://localhost:9090/docs, or http://localhost:9090/redoc (for the alternate ReDoc format).

ViteJS was used to provision the frontend, which is implemented with React. The UI is tested with Jest.
