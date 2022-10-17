import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import Ejemplo  from "./components/Ejemplo"
import {Titulo}  from "./components/Titulo";
import FormularioLogin from "./components/FormularioLogin";
import FormularioRegistro from "./components/FormularrioRegistro";
import Boton from "./styles/boton"




const root = ReactDOM.createRoot(document.getElementById("root"));


const App = () => {
  const[sesion, cambiarSesion] = useState(false);
  const[registro, cambiarRegistro] = useState(true);
  //const[cuenta, cambiarCuenta] = useState(0);
  //let sesion = true;
  // const cambiarSesion = () =>{
  //   console.log(sesion)
  //   sesion = false;
  //   console.log(sesion)
  // };
    return (
      <>
      {sesion === true ? (
        <>
          <Ejemplo/>{/* Invocamos a nuestro componente como HTML pero podemos cerrar al final del componente*/}
          <Boton onClick={() => cambiarSesion(false) }>Cerrar session</Boton>
          {/* <h1> Operaciones con botones
            <Titulo texto = {cuenta} color = "green" alineado="center" tamaño ="2rem"/>
            <button onClick={() => cambiarCuenta(cuenta+1) }>Aumentar cuenta</button>
            <button onClick={() => cambiarCuenta(cuenta-1) }>Reducir cuenta</button>
            <button onClick={() => cambiarCuenta(cuenta*2) }>Multiplicar cuenta por 2</button>
            <button onClick={() => cambiarCuenta(cuenta/2) }>Dividir cuenta entre 2</button>
          </h1> */}
        </>
      ) : ( //aqui se pone cuando la conducion no se cumple 
        <>
          {registro === false ? (
            <>
              <Titulo texto="Registrarse" color="maroon" tamaño="3rem" alineado="left"/>
              <FormularioRegistro cambiarRegistro={cambiarRegistro}/>
            </>
          ) : (
            <>
              <Titulo texto="Inicio de Sesion" color="maroon" tamaño="3rem" alineado="left"/>
              <FormularioLogin cambiarSesion={cambiarSesion} cambiarRegistro={cambiarRegistro}/>
            </>
          )}
        </>
      )}
      </>
    )
  }



//----------------------------------------------------------------
//Inicio de react
//----------------------------------------------------------------

root.render(<App/>);

