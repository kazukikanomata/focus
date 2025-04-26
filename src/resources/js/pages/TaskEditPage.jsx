import React from 'react';
import ReactDOM from 'react-dom/client';
import TaskEdit from '../components/TaskEdit';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('task-edit');

if (root) {
  const contentCategoriesStr = root.dataset.categories || '{}';
  const categories = JSON.parse(contentCategoriesStr);
  const contentTaskStr = root.dataset.task || '{}';
  const task = JSON.parse(contentTaskStr);

  console.log(categories);
  console.log(task);

  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <BrowserRouter>
        <TaskEdit categories={categories} task={task} />
      </BrowserRouter>
    </React.StrictMode>
  );
}
