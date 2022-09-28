import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

const name = "Alejandro";
const session = true;
const apellido = "Linares"

const alumnos =["Mauro","Andrea", "Aldo", "Abrhaham"]

const jsx = (
  <>
    {session === true ? (
      <>
        <h1
          className="titulo"
          style={{ color: "blue", textAlign: "center", fontSize: "4rem" }}>
          Hola {name}
        </h1>
        {apellido && <p style={{ color: "green", textAlign: "center", fontSize: "3rem" }}>Tu apellido es: {apellido} </p>}

        <h3>Lista de alumnos </h3>
        <ul>
          {alumnos.map((nombre,i)=>{
            return <li key={i}>{i} {nombre}</li>;
          })}
        </ul>
 
      </>
    ) : ( //aqui se pone cuando la conducion no se cumple 
      <>
        <h1 style={{ color: "blue", textAlign: "center", fontSize: "4rem" }}>
          No has iniciado sesion
        </h1>
      </>
    )}
  </>
);
//----------------------------------------------------------------
//Funciones
//----------------------------------------------------------------

// const comprueba_sesion = (session) => { //declaracion de funcion de tipo flecha
//   if (session === true){
//     return jsx;
//   }
//   else {
//     return  <h1 style={{color: "blue", textAlign:"center", fontSize:"4rem"}}>No has iniciado sesion </h1>
//   }

// }

//----------------------------------------------------------------
//Inicio de react
//----------------------------------------------------------------

root.render(jsx);
