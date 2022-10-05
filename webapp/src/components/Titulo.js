import React from "react"

const TituloVerde = ({alumno, matricula, color}) => {
    return (
        <h1 className="titulo" style={{ color: color, textAlign: "center", fontSize: "4rem" }}>
         Hola {alumno} con id de {matricula}
        </h1>
    );
}
const TituloRojo = ({alumno, matricula, color}) => {
    return (
        <h1 className="titulo" style={{ color: color, textAlign: "center", fontSize: "4rem" }}>
          Hola {alumno} con id de {matricula}
        </h1>

    );
}

export {TituloRojo, TituloVerde};