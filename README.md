# Wiki Server (Basic)

## Technology Stack

This project uses:

* Python 3.10

## Setup
```bash
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
```

## Running and Testing

Convenience scripts are provided for running and testing the server.

`run-server.sh` starts the server (in dev mode by default), on port 9090.

`run-tests.sh` invokes `pytest` with no parameters.


## Documentation

As the underlying server uses Python's FastAPI, a /docs routed is automatically populated with each available route, describing its parameters and return values.

You can access it at http://localhost:9090/docs, or http://localhost:9090/redoc (for the alternate ReDoc format).
