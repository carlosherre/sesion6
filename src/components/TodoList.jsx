import React from "react";
import { TodoItem } from "./TodoItems";

export function TodoList({listas}){
    return(
        <ul>
            {listas.map((item) => (
                <TodoItem key={item.id} item={item}/>
            ))}
        </ul>
    );
}