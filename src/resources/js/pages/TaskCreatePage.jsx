import React from 'react';
import ReactDOM from 'react-dom/client';
import TaskCreate from '../components/TaskCreate';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('tasks-create');

if (root) {
  const contentStr = root.dataset.categories || '{}';
  const categories = JSON.parse(contentStr);
  console.log(categories);

  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <BrowserRouter>
        <TaskCreate categories={categories} />
      </BrowserRouter>
    </React.StrictMode>
  );
}
