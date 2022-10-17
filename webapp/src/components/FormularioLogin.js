//imr - snipet
import React, {useState} from 'react';
import Boton from "../styles/boton"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';




//sfc - snipet
const FormularioLogin = (props) => {
  const[user, setUser] = useState("");
  const[password, setPassword] = useState("");

  const onChangeUser = (e) => {
    console.log(e.target.value)
    setUser(e.target.value)
  }

  const onChangePassword = (e) => {
    console.log(e.target.value)
    setPassword(e.target.value)
  }

  const onChange = (e) => {
    if (e.target.name === "name") {
        console.log(e.target.value);
        setUser(e.target.value);
    }
    else if (e.target.name === "password") {
        console.log(e.target.value);
        setPassword(e.target.value);
    }
  };

  const onSubmit = (e) => {
        console.log(e)
        e.preventDefault();
        if(user === "Alejandro Linares" && password === "123"){
           // alert("correcto")
            props.cambiarSesion(true);
        }
        else{
            alert("incorrecto")
            setUser("");
            setPassword("")
        }
  }


    return ( 
        <form action="" onSubmit={onSubmit}>
            <p>Usuario: {user}</p>
            <p>Password : {password}</p>
            <div>
                <label htmlFor="name">
                    User
                </label>
                {/* Formulario del login */}
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    value={user}
                    onChange={onChange}
                    >
                </input>
            </div>
            <div>
                <label htmlFor="password">
                    Contraseña
                </label>
                {/* Formulario del password */}
                <input 
                    type="password" 
                    name="password" 
                    id="password"
                    value={password}
                    onChange={onChange}
                    >
                </input>
            </div>
          <Boton>Iniciar Sesion</Boton>
          <Boton onClick={() => props.cambiarRegistro(false)}>Registrarse</Boton>
          <Button variant="primary">Hola mundo</Button>
        </form>
     );
}
 
export default FormularioLogin;