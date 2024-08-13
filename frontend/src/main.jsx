import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page.jsx";
import WikiFrontend from './pages/HomePage.jsx';
import WikiArticle from './pages/Article.jsx';
import WikiEditor from './pages/Editor.jsx';
import './index.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <WikiFrontend />,
        errorElement: <ErrorPage />,
    },
    {
        path: "edit/:article",
        element: <WikiEditor />,
    },
    {
        path: "/:article",
        element: <WikiArticle />,
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={router} />
      {/* <WikiFrontend /> */}
    </StrictMode>,
)
