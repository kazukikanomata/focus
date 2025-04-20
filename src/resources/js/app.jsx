import React from "react";
import ReactDOM from 'react-dom/client';
import TopPage from "./components/TopPage";

const rootElement = document.getElementById('app');

if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <TopPage />
        </React.StrictMode>
    );
}