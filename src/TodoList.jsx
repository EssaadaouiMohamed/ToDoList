import React from 'react';
import './index.css'
import TodoItem from './TodoItem.jsx';


function TodoList(props)  {
    return  (
        <div className="container">
            <h2 className="title">THINGS TO DO</h2>
            <input type="text" className="new" placeholder="Add item"/>
            <ul>
                
            </ul>
        </div>
        );
    
}

export default TodoList;