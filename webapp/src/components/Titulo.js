import React from "react"

const TituloVerde = () => {
    const name = "Alejandro";

    return (
        <h1 className="titulo" style={{ color: "green", textAlign: "center", fontSize: "4rem" }}>
          Hola {name}
        </h1>

    );
}
const TituloRojo = () => {
    const name = "Alejandro";

    return (
        <h1 className="titulo" style={{ color: "red", textAlign: "center", fontSize: "4rem" }}>
          Hola {name}
        </h1>

    );
}

export {TituloRojo, TituloVerde};