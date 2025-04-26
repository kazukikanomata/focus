import React from 'react';
import ReactDOM from 'react-dom/client';
import TaskShow from '../components/TaskShow';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('task-show');

if (root) {
  const contentStr = root.dataset.task || '{}';
  const task = JSON.parse(contentStr);
  console.log('tasks:', task);

  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <BrowserRouter>
        <TaskShow task={task} />
      </BrowserRouter>
    </React.StrictMode>
  );
}
