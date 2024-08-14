import React from "react";
import { useState, useEffect } from 'react';
import '../HomePage.css';
import { useNavigate } from 'react-router-dom';
import * as Constants from '../constants.js';

function WikiFrontend() {
    const [articles, setArticles] = useState([]);
    const navigate = useNavigate();


    // Function to fetch articles from the backend
    const fetchArticles = async () => {
        try {
            const response = await fetch(`http://localhost:${Constants.BACKEND_PORT}/articles/`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setArticles(data);
        } catch (err) {
        };
    };

    useEffect(() => {
        fetchArticles();

        const intervalId = setInterval(() => {
            fetchArticles();
        }, 2000);

        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures this runs once on mount


    return (
        <>
          <div className="header">
            <h1>Wiki Articles</h1>
          </div>
          <div className="article-list">
            {articles.length > 0 ? (
                <ul>
                    {articles.map((article, index) => (
                        <li key={index}>
                          <button onClick={() => navigate(`/${article}`)}>
                            {article}
                          </button>
                        </li> // Adjust based on the actual data structure
                    ))}
                </ul>
            ) : (
                <p>Nothing to display</p>
            )}
          </div>
        </>
    );
}

export default WikiFrontend;
