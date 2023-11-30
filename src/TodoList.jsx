import React, { useState } from 'react';
import './index.css';
import TodoItem from './TodoItem.jsx';

function TodoList(props) {
    const [Items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        console.log(JSON.stringify(Items[6]));
        setInputValue(e.target.value);
    };
    const AddItem = () => {
        setItems((items) => [
            ...items,
            { Id: Items.length + 1, Name: inputValue, Done: false }
        ]);
        setInputValue('');
    };
    return (
        <div className="container">
            <h2 className="title">THINGS TO DO</h2>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className="new"
                placeholder="Add item"
            />
            <button disabled={inputValue === ''} onClick={AddItem}>Add item</button>
            <ul>
                {Items.map((item) => {
                    return <TodoItem key={item.Id} item={item} />;
                    <div className='line'></div>
                })}
            </ul>
        </div>
    );
}

export default TodoList;
