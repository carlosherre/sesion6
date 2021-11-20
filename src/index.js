import React from "react";
import ReactDOM from "react-dom";

//ELEMENTOS: son los bloques más pequeños de mi aplicación en React
const element=<h1> Hola Mundo !!!</h1>

//COMPONENTES: permite separar la interfaz en piezas independientes y está compuesta por elementos

//Render recibe un elemento y el contenedor donde se mostrará en mi página html
ReactDOM.render(element, document.getElementById("root"));