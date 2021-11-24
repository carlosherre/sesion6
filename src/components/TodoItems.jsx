import React from "react";

// export function TodoItem({item}){
//     const {id, task, completed}=item;
//     return <li>{task}</li>
// }


export function TodoItem({item, toggleTask}){
    const {id, task, completed}=item;
    const handleTaskClick = ()  => {
        toggleTask(id);
    }
    return (
        <li>
            <input type="checkbox" checked={completed} onChange={handleTaskClick} />
            {task}
        </li>
    );
}
