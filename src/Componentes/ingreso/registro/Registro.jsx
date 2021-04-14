import React from 'react';
import InputFormulario from '../inputFormulario/InputFormulario';
// import '../ingreso.css';

function Registro(props) {
    return (
        <>
            <h1>Registro de cuenta</h1>
            <form action="post">
                <InputFormulario tipo="text" name="usuario" textoLabel="Usuario" />
                <InputFormulario tipo="email" name="email" textoLabel="Mail ficticio" />
                <InputFormulario tipo="password" name="contrasenia" textoLabel="Contraseña" />
                <button onClick={(evento) => props.manejoClickForm(evento, 'notas')}>Registrarse</button>
            </form>
            <p className="registro">Ya tienes una cuenta?
                <a onClick={(evento) => props.manejoClickForm(evento, 'login')} href="./login">Ingresa!</a>
            </p>        
        </>
    )
}

export default Registro;