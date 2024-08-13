import pytest
from fastapi.testclient import TestClient
from wiki_server import server as wiki_server


@pytest.fixture(scope="function")
def server():
    wiki_server.stored_articles = {}
    with TestClient(wiki_server.app) as client:
        yield client
