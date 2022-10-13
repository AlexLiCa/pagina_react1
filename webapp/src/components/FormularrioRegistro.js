import React, {useState}  from 'react';


const FormularioRegistro = (props) => {
    const[user, setUser] = useState("");
    const[password, setPassword] = useState("");
    const[cpassword, setCPassword] = useState("");

    const onChange = (e) => {
        if (e.target.name === "name") {
            console.log(e.target.value);
            setUser(e.target.value);
        }
        else if (e.target.name === "password") {
            console.log(e.target.value);
            setPassword(e.target.value);
        }
        else if (e.target.name === "cpassword") {
            console.log(e.target.value);
            setCPassword(e.target.value);
        }
      };

      const onSubmit = (e) => {
        console.log(e)
        e.preventDefault();
        if(password === cpassword){
            alert("Registro completado")
            props.cambiarRegistro(true);
        }
        else{
            alert("incorrecto")
        }
  }

    return ( 
        <form action="" onSubmit={onSubmit}>
            <p>Usuario: {user}</p>
            <p>Password : {password}</p>
            <p>Confirm Password : {cpassword}</p>
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

                {/* Formulario del password */}
                <label htmlFor="password">
                    Contraseña
                </label>
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
                {/* Formulario del password */}
                <label htmlFor="cpassword">
                    Confirmar contraseña
                </label>
                <input 
                    type="Password" 
                    name="cpassword" 
                    id="cpasswor"
                    value={cpassword}
                    onChange={onChange}
                    >
                </input>
            </div>
          <button>Registrarse</button>
        </form>


    );
}
 
export default FormularioRegistro;