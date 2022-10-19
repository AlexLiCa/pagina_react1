//imr - snipet
import React, {useState, useEffect} from 'react';
import Boton from "../styles/boton"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Button';


//sfc - snipet
const FormularioLogin = (props) => {
  const[user, setUser] = useState("");
  const[password, setPassword] = useState("");
  const[password2, setPassword2] = useState("");


  useEffect ( () => {
        console.log("Montando componente...");
  }, []); //esta parte hace que solo se ejecute cuando recargamos la pagina 

  const onChangeUser = (e) => {
    //console.log(e.target.value)
    setUser(e.target.value)
  }

  const onChangePassword = (e) => {
    //console.log(e.target.value)
    setPassword(e.target.value)
  }

  const onChange = (e) => {
    if (e.target.name === "name") {
        //console.log(e.target.value);
        setUser(e.target.value);
    }
    else if (e.target.name === "password") {
        //console.log(e.target.value);
        setPassword(e.target.value);
    }
    else if (e.target.name === "password2") {
        //console.log(e.target.value);
        setPassword2(e.target.value);
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
            <div>
                <label htmlFor="password2">
                    Contraseña 2
                </label>
                {/* Formulario del password */}
                <input 
                    type="password" 
                    name="password2" 
                    id="password2"
                    value={password2}
                    onChange={onChange}
                    >
                </input>
            </div>
          <Boton>Iniciar Sesion</Boton>
          <Boton onClick={() => props.cambiarRegistro(false)}>Registrarse</Boton>
          <Button variant="secondary">Hola mundo</Button>
        </form>
     );
}
 
export default FormularioLogin;