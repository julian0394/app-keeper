import React from 'react';
import './login.css';

function Login() {
    return (
        <div className="contenedor-login">
            <h1>Inicia sesión</h1>
            <form action="/" method="post">
                <div className="input-form">
                    <input type="text" name="usuario" placeholder=" " required />
                    <label>Usuario</label>
                </div>
                <div className="input-form">
                    <input type="password" name="contraseña" placeholder=" " required />
                    <label>Contraseña</label>
                </div>
                <button type="submit">Ingresar</button>
                <p className="registro">No tienes una cuenta? <a href="">Registrate aquí</a></p>
            </form>
        </div>
    )
}

export default Login;