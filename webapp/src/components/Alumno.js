import React from "react"

const Alumno = ({alumno, matricula, color}) => {
    return (
        <h1 className="alumno" style={{ color: color, textAlign: "center", fontSize: "2rem" }}>
        {matricula} : {alumno} 
        </h1>
    );
}


export default Alumno;
