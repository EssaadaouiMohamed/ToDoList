import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from './TodoList.jsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='h-screen flex flex-col justify-center items-center'>
        <TodoList />
    </div>
);
