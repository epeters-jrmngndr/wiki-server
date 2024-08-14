import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Markdown from 'react-markdown';
import '../Viewer.css';
import '../constants.js';

import * as Constants from '../constants.js';


function WikiArticle() {
    let path = window.location.pathname.replace('\/', '');
    const [article, setArticle] = useState();
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const fetchArticle = async () => {
        try {
            const response = await fetch(`http://localhost:${Constants.BACKEND_PORT}/articles/${path}`);
            if (!response.ok) {
                throw new Error("No article with this exact name found. Use the Edit button in the header to add it.");
            }
            const data = await response.text();
            setArticle(data);

        } catch(err) {
            setError(err);

        };

    };

    useEffect(() => {
        fetchArticle();

        const intervalId = setInterval(() => {
            fetchArticle();
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
          <div>
            <h1>{path} </h1>
            <button data-testid="back-button" onClick={() => navigate(`/`)} >
              Back
            </button>
            <button data-testid="edit-button" onClick={() => navigate(`/edit/${path}`)} >
              Edit
            </button>
          </div>
            {error && <p>Error: {error.message}</p>}
          <div className="article-view">
            <Markdown>{article}</Markdown>
          </div>
        </>
    )

}

export default WikiArticle;
