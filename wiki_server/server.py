#!/usr/bin/env python3
from typing import Any
from fastapi import FastAPI, Response, Body, Request, status
from fastapi.responses import HTMLResponse

app = FastAPI()

stored_articles = {}


@app.get("/articles", include_in_schema=False)
@app.get("/articles/")
def list_articles():
    return list(stored_articles.keys())


@app.get("/articles/{article_name}", response_class=HTMLResponse)
@app.get("/articles/{article_name}/", include_in_schema=False)
def get_article(article_name: str, response: HTMLResponse):
    if article_name in stored_articles.keys():
        return HTMLResponse(content=stored_articles[article_name])
    response.status_code = status.HTTP_404_NOT_FOUND


@app.put("/articles/{article_name}", status_code=200)
async def put_article(article_name: str, response: Response, request: Request):
    body = await request.body()
    if article_name not in stored_articles.keys():
        response.status_code = status.HTTP_201_CREATED

    stored_articles[article_name] = body.decode("utf-8")
