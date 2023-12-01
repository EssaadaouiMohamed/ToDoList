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
        <div className="container mx-auto justify-center items-center flex-col space-x-4 box-border flex py-4 px-32 border-4 rounded-md">
            <h2 className="text-4xl font-bold mb-4 text-center">THINGS TO DO</h2>
            <div className="flex justify-center">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    className=" h-fit  w-auto outline p-2 mr-4 outline-slate-400 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Add item"
                />
                <button
                    className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"'
                    disabled={inputValue === ''}
                    onClick={AddItem}
                >
                    Add item
                </button>
            </div>
            <ul className="flex flex-col bg-slate-600 rounded-md m-4 w-full">
                {Items.map((item) => {
                    return <TodoItem key={item.Id} item={item} />;
                })}
            </ul>
        </div>
    );
}

export default TodoList;
