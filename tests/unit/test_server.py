def test_server_startup(server):
    """Confirm that the server itself can start up, and serves basic expected routes."""
    response = server.get("/articles")
    assert response.status_code == 200
    assert response.json() == []

    response = server.get("/articles/fake")
    assert response.status_code == 404
    assert response.text == ""


def test_storing_article(server):
    """Test that we can store and update articles."""
    key = "my_article"

    # Create initial body
    body = bytes("Initial Body", "utf-8")
    response = server.put(f"/articles/{key}", content=body)
    assert response.status_code == 201

    # Update body
    body = bytes("My Updated Body", "utf-8")
    response = server.put(f"/articles/{key}", content=body)
    assert response.status_code == 200


def test_fetching_article(server):
    """Test that stored articles can be fetched."""
    key = "my_article"

    # Create initial body
    body = bytes("Initial Body", "utf-8")
    server.put(f"/articles/{key}", content=body)

    response = server.get(f"/articles/{key}")
    assert response.status_code == 200
    assert response.text == body.decode("utf-8")


def test_article_listing(server):
    """Test that we can request lists of articles."""
    keys = ["first_article", "second_article", "third_article"]

    body = bytes("Article Body", "utf-8")
    for key in keys:
        server.put(f"/articles/{key}", content=body)

    response = server.get("/articles")
    assert response.status_code == 200
    assert response.json() == keys
