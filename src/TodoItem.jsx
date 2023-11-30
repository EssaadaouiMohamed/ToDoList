import { useState } from 'react';
import Item from './ListItem';

function TodoItem(props) {
    const SetDone = () => {
        setItem((item) => {
            return (item.Done = !item.Done);
        });
    };
    return (
        <div>
            <input
                type="checkbox"
                onChange={SetDone}
                checked={props.Done}
                name={props.Id}
            />{' '}
            <label for={props.Id}>{props.Name}</label>
        </div>
    );
}
export default TodoItem;
