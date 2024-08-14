# Wiki Server (Basic)

## Technology Stack

This project uses:

* Python 3.10
  * FastAPI
  * PyTest
* ReactJS 18.3
  * Other react dependencies, as listed in `package.json`
* Docker compose
* Nginx (as a reverse proxy)

## Setup
```bash
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt

cd wiki_frontend/
npm install
npm run dev
```

## Running and Testing

Convenience scripts are provided for running and testing the server.

`run-server.sh` starts the server (only), which runs dev mode by default. It starts on port 9090.

`run-frontend` starts the frontend (only), which also runs in dev mode.

`run-tests.sh` invokes both `pytest`, which tests the backend, and `npm test` (inside the `frontend/` directory), which tests the frontend.

`run-full.sh` starts both services locally.

`build.sh` builds the docker container, and `run-container.sh` starts it.

For convenience of testing, a helper script `attach-shell.sh` is also included.

## Documentation

As the underlying server uses Python's FastAPI, a /docs routed is automatically populated with each available route, describing its parameters and return values.

You can access it at http://localhost:9090/docs, or http://localhost:9090/redoc (for the alternate ReDoc format).

ViteJS was used to provision the frontend.

It is containerized with Docker.
