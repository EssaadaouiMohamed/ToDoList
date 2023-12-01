import { useState } from 'react';

function TodoItem(props) {
    const [item, setItem] = useState(props.item);
    const SetDone = (event) => {
        console.log(item.Name);
        setItem((item) => {
            return { ...item, Done: event.target.checked };
        });
    };
    return (
        <li className=" border-b border-gray-200 ">
            <div className="flex items-center ps-3">
                <input
                    type="checkbox"
                    onChange={SetDone}
                    checked={item.Done}
                    name={item.Id}
                    id={item.Id}
                    className="w-4 h-4 appearance-none text-blue-500 bg-slate-400 rounded-lg border border-black-900 focus: outline-none  hover:border-blue-400 checked:bg-blue-500"
                />
                <label
                    className=" text-white font-medium m-3"
                    htmlFor={item.Id}
                >
                    {item.Name}
                </label>
            </div>
        </li>
    );
}
export default TodoItem;
