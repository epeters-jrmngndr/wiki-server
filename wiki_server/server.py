#!/usr/bin/env python3
from typing import Any
from fastapi import FastAPI, Response, Body, Request, status
from fastapi.responses import HTMLResponse

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

stored_articles = {}


@app.get("/articles", include_in_schema=False)
@app.get("/articles/")
def list_articles():
    """List all articles in memory"""
    return list(stored_articles.keys())


@app.get("/articles/{article_name}", response_class=HTMLResponse)
@app.get("/articles/{article_name}/", include_in_schema=False)
def get_article(article_name: str, response: HTMLResponse):
    """Retrieve an article by name"""
    if article_name in stored_articles.keys():
        return HTMLResponse(content=stored_articles[article_name])
    response.status_code = status.HTTP_404_NOT_FOUND


@app.put("/articles/{article_name}", status_code=200)
async def put_article(article_name: str, response: Response, request: Request):
    """Create or update an article"""
    body = await request.body()
    if article_name not in stored_articles.keys():
        response.status_code = status.HTTP_201_CREATED
    stored_articles[article_name] = body.decode("utf-8")
