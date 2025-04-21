import React from "react";
import ReactDOM from 'react-dom/client';
import TasksIndex from "../components/TaskIndex";

const root = document.getElementById("tasks-index");

if (root) {
    const tasksRawStr = root.dataset.tasks || '{}';
    const categoriesStr = root.dataset.categories || '{}';

    const tasksRaw = JSON.parse(tasksRawStr);
    const categories = JSON.parse(categoriesStr);
    const message = root.dataset.message || undefined;

    const tasks = tasksRaw.data || [];

    ReactDOM.createRoot(root).render(
        <React.StrictMode>
            <TasksIndex 
                tasks={tasks} 
                categories={categories} 
                message={message}
            />
        </React.StrictMode>
    );
}