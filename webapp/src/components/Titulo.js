import React from "react"

const Titulo = () => {
    const name = "Alejandro";

    return (
        <h1 className="titulo" style={{ color: "blue", textAlign: "center", fontSize: "4rem" }}>
          Hola {name}
        </h1>

    );
}

export default Titulo;