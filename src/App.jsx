import React, { Fragment, useState, useRef } from "react";
import { TodoList } from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";

export function App() {
    //listas: Estado
    //setlistas: Modificador del estado
    const [listas, setlistas] = useState([
        {id:1, task:'Recoger maracuyas', completed:false},
    ]);
    //Referencia para obtener a la data ingresada y usarla en el handler
    const taskref=useRef();

    //Método para obtener tareas
    const handleTaskAdd = () => {
        //arrow function
        const task = taskref.current.value;
        //En caso de que la data esté vacía no retornamos nada
        if (task==="") return;
        //En caso de recibir información, creamos un nuevo elemento y hacemos cambios sobre el estado
        setlistas((prevTask) =>{
            return[...prevTask, {id:uuidv4(), task, completed:false}];
        });
        taskref.current.value=null;  //Limpia el input cuando se añade.
    };
    return (
        //Fragment se utiliza para englobar varios elementos
        <Fragment>
            <TodoList listas={listas}/>
            <input ref={taskref} type="text" placeholder="Nueva Tarea"/>
            <button onClick={handleTaskAdd}>+</button>
            <button>-</button>
        </Fragment>
    );
}

