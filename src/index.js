import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App"
//ELEMENTOS: son los bloques más pequeños de mi aplicación en React
//const element=<h1> Hola Mundo !!!</h1>
ReactDOM.render(<App />, document.getElementById("root"));
//COMPONENTES: permite separar la interfaz en piezas independientes y está compuesta por elementos
// function getTime() {
//     const element = (
//         <div>
//             <h1> Hello Everyone !!! </h1>
//             <h2> It is {new Date().toLocaleTimeString() } </h2>
//         </div>
//     );

//     //Render recibe un elemento y el contenedor donde se mostrará en mi página html
//     ReactDOM.render(<App />, document.getElementById("root"));
// }

// setInterval(getTime,1000);