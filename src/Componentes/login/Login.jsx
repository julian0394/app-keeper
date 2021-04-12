import React from 'react';
import './login.css';
import './Login2';

function Login(props) {
    const rutita = props.ruta;

    return (
        <div className="contenedor-login">
            {rutita === 'login' ? <h1>Inicia sesión</h1> : <h1>Registrate</h1>}
            <form action="/" method="post">
                <div className="input-form">
                    <input  type="text" name="usuario" placeholder=" " required />
                    <label className="no-seleccionable">Usuario</label>
                </div>
                {rutita === 'logon' && 
                    <div className="input-form">
                        <input type="email" name="email" placeholder=" " required />
                        <label className="no-seleccionable">Mail ficticio</label>
                    </div>
                }
                <div className="input-form">
                    <input type="password" name="contrasenia" placeholder=" " required />
                    <label className="no-seleccionable">Contraseña</label>
                </div> 
                <button type="submit">Ingresar</button>
                <p className="registro">No tienes una cuenta? <a href="">Registrate aquí</a></p>
            </form>
            <button onClick={() => props.setRuta('logon')}>cambio</button>
        </div>
    )
}

export default Login;