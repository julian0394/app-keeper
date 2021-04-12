import React from 'react';
import './login.css'

function Login() {
    return (
        <div className="contenedor-login">
            <h1>Inicia sesión</h1>
            <form action="/" method="post">
                <div className="input-form">
                    <p>Usuario</p>
                    <input type="text" name="usuario" placeholder="Ingrese su usuario" required />
                </div>
                <div className="input-form">
                    <p>Contraseña</p>
                    <input type="password" name="contraseña" placeholder="Ingrese su contraseña" required />
                </div>
                <button type="submit">Ingresar</button>
                <p className="registro">No estás registrado? <a href="">Registrate aquí</a></p>
            </form>
        </div>
    )
}

export default Login;