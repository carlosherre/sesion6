import React, { Fragment, useState, useRef, useEffect } from "react";
import { TodoList } from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";

export function App() {
    //listas: Estado
    //setlistas: Modificador del estado
    
    const [listas, setListas] = useState([
        {id:1, task:'Recoger maracuyas', completed:false},
    ]);

    //Referencia para obtener a la data ingresada y usarla en el handler
    const taskref=useRef();
    const KEY="listApp.lists";
    //Método para obtener tareas
    const handleTaskAdd = () => {
        //arrow function
        const task = taskref.current.value;
        //En caso de que la data esté vacía no retornamos nada
        if (task==="") return;
        //En caso de recibir información, creamos un nuevo elemento y hacemos cambios sobre el estado
        setListas((prevTask) =>{
            return[...prevTask, {id:uuidv4(), task, completed:false}];
        });
        taskref.current.value=null;  //Limpia el input cuando se añade.
    };
    const toggleTask = (id) => {
        const newTask = [...listas];
        const task = newTask.find((x)=>x.id===id);
        task.completed=!task.completed;
        setListas(newTask);
    }

    const handleClearCompleteTask = () =>{
        const newTasks = listas.filter((task)=>!task.completed);
        setListas(newTasks);
    }

    useEffect(()=>{
        const storedTask = JSON.parse(localStorage.getItem(KEY));
        if (storedTask){
            setListas(storedTask);
        }
    }, []);

    useEffect(()=>{localStorage.setItem(KEY, JSON.stringify(listas));},[listas]);

    return (
        //Fragment se utiliza para englobar varios elementos
        <Fragment>
            <TodoList listas={listas} toggleTask={toggleTask}/>
            <input ref={taskref} type="text" placeholder="Nueva Tarea"/>
            <button onClick={handleTaskAdd}>+</button>
            <button onClick={handleClearCompleteTask}>-</button>
            <div>Te quedan {listas.filter((task) => !task.completed).length} tareas por terminar</div>
        </Fragment>
    );
    //Vamos a probar el git
}

