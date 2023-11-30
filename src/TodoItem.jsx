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
        <div >
            <input
                className="checkbox"
                type="checkbox"
                onChange={SetDone}
                checked={item.Done}
                name={item.Id}
                id={item.Id}
            />
            <label htmlFor={item.Id}>{item.Name}</label>
        </div>
    );
}
export default TodoItem;
