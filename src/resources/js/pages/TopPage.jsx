import React from 'react';
import ReactDOM from 'react-dom/client';
import TopPage from '../components/TopPage';

const root = document.getElementById('top-page');

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <TopPage />
    </React.StrictMode>
  );
}