//imr - snipet
import React, {useState} from 'react';



//sfc - snipet
const FormularioLogin = () => {
  const[user, setUser] = useState("");
  const[password, setPassword] = useState("");

    return ( 
        <form action="">
            <p>Usuario: {user}</p>
            <p>Password : {password}</p>
            <div>
                <label htmlFor="user">
                    User
                </label>
                {/* Formulario del login */}
                <input 
                    type="text" 
                    name="user" 
                    id="user"
                    value={user}
                    onChange={(e) =>{
                        console.log(e.target.value)
                        setUser(e.target.value)
                    }}
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
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                    >
                </input>
            </div>
        </form>
     );
}
 
export default FormularioLogin;