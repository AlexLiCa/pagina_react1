import React from "react";
//import Titulo  from "./Titulo"
import {Titulo} from "./Titulo"
import Alumno from "./Alumno"



//creamos un componente usando funciones flecha
// (): aqui ponemos los parametros
// {}: aqui ponemos el codigo

const Ejemplo = () => {

    const apellido = ""
    const alumnos =["Mauro","Andrea", "Aldo", "Abrhaham", "Hola"]

    return (
      <>
       <Titulo alumno="Cova" matricula="193029" color="purple"/>
        {apellido && <p style={{ color: "green", textAlign: "center", fontSize: "3rem" }}>Tu apellido es: {apellido} </p>}
        <h3 style={{ color: "tomato", textAlign: "center", fontSize: "3rem"}}>Lista de alumnos</h3>
          {alumnos.map((nombre,i)=>{
            return <Alumno alumno={nombre} matricula={i}/>;
          })}
      </>
    )
};

export default Ejemplo;