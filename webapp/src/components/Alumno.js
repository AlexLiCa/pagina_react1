import React from "react";



//creamos un componente usando funciones flecha
// (): aqui ponemos los parametros
// {}: aqui ponemos el codigo

const Alumno = () => {

    const name = "Alejandro";
    const apellido = ""
    const alumnos =["Mauro","Andrea", "Aldo", "Abrhaham"]

    return (
      <>
        <h1 className="titulo" style={{ color: "blue", textAlign: "center", fontSize: "4rem" }}>
          Hola {name}
        </h1>
        {apellido && <p style={{ color: "green", textAlign: "center", fontSize: "3rem" }}>Tu apellido es: {apellido} </p>}

        <h3 style={{ color: "tomato", textAlign: "center"}}>Lista de alumnos </h3>
        <ul style={{ color: "tomato", textAlign: "center"}}>
          {alumnos.map((nombre,i)=>{
            return <li key={i}> {i} {nombre}</li>;
          })}
        </ul>
      </>
    )
};

export default Alumno;