import React from 'react';
import InputFormulario from '../inputFormulario/InputFormulario';
// import '../ingreso.css';

function Login(props) {
    return (
        <>
            <h1>Inicio de sesión</h1>
            <form action="post">
                <InputFormulario tipo="text" name="usuario" textoLabel="Usuario" />
                <InputFormulario tipo="password" name="contrasenia" textoLabel="Contraseña" />
                <button onClick={(evento) => props.manejoClickForm(evento, 'notas')}>Ingresar</button>
            </form>
            <p className="registro">No tienes una cuenta?  
                <a onClick={(evento) => props.manejoClickForm(evento, 'registro')} href="./register">Registrate!</a>
            </p>            
        </>
    )
}

export default Login;