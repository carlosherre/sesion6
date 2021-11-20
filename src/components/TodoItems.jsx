import React from "react";

export function TodoItem({item}){
    const {id, task, completed}=item;
    return <li>{task}</li>
}
