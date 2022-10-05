import React from "react";
import ReactDOM from "react-dom/client";
import Alumno  from "./components/Alumno"

const root = ReactDOM.createRoot(document.getElementById("root"));


const session = true;

const jsx = (
  <>
    {session === true ? (
      <>
      <Alumno/>  {/* Invocamos a nuestro componente como HTML pero podemos cerrar al final del componente*/}
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
//Inicio de react
//----------------------------------------------------------------

root.render(jsx);

