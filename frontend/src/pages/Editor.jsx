import { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import '../Editor.css';

import * as Constants from '../constants.js';

function WikiEditor() {
    let path = window.location.pathname.replace('/edit/', '');

    // state variables
    const [article, setArticle] = useState();
    const [error, setError] = useState(null);

    const fetchBody = async () => {
        try {
            const response = await fetch(`http://localhost:${Constants.BACKEND_PORT}/articles/${path}`);
            if (!response.ok) {
                throw new Error("Not found: Saving creates new article");
            }

            const data = await response.json();
            setArticle(data.body);
        } catch(err) {
            setError(err);
        };
    };

    const editBody = async (e) => {
        setArticle(e.target.value);
        try {

        } catch(err) {
            setError(err);
        };
    };

    useEffect(() => {
        fetchBody();
    }, []);

    const saveChanges = async() => {
        try {
            const response = await fetch(`http://localhost:${Constants.BACKEND_PORT}/articles/${path}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ body: article }),
            });
            if (!response.ok) {
                throw new Error('Failed to save article');
            }
            setError(null);
        } catch (err) {
            setError(err);
        }
    };


    return (
        <>
          <div>
            <h1>Now Editing: {path}</h1>
          </div>
          {error && <p>Error: {error.message}</p>}
          <button onClick={() => saveChanges()}>Save</button>
          <div>
            <h3>Editor</h3>
            <input
              type="text"
              defaultValue={article}
              onChange={(e) => editBody(e)}
            />
            <h3>Preview</h3>
            <div className="article-view">
                <Markdown>{article}</Markdown>
            </div>
          </div>
        </>
    )
}

export default WikiEditor;
