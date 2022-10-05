import React from "react";
//import Titulo  from "./Titulo"
import {TituloRojo, TituloVerde} from "./Titulo"

//creamos un componente usando funciones flecha
// (): aqui ponemos los parametros
// {}: aqui ponemos el codigo

const Alumno = () => {

    const apellido = ""
    const alumnos =["Mauro","Andrea", "Aldo", "Abrhaham", "Hola"]

    return (
      <>
       <TituloRojo alumno="Raul" matricula="193029" color="red"/>
        {apellido && <p style={{ color: "green", textAlign: "center", fontSize: "3rem" }}>Tu apellido es: {apellido} </p>}

        <h3 style={{ color: "tomato", textAlign: "center"}}>Lista de alumnos </h3>
        <ul style={{ color: "tomato", textAlign: "center"}}>
          {alumnos.map((nombre,i)=>{
            return <li key={i}> {nombre}</li>;
          })}
        </ul>
      </>
    )
};

export default Alumno;