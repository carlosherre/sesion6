import React from "react";
import { TodoItem } from "./TodoItems";

export function TodoList({listas, toggleTask}){
    return(
        <ul>
            {listas.map((item) => (
                <TodoItem key={item.id} item={item} toggleTask={toggleTask}/>
            ))}
        </ul>
    );
}