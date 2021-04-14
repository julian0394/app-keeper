import React, {useState} from 'react';
import InputFormulario from '../inputFormulario/InputFormulario';

function Login(props) {
    const [usuarioLogin, setUsuarioLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');

    return (
        <>
            <h1>Inicio de sesión</h1>
            <form action="post">
                <InputFormulario tipo="text" name="usuario" textoLabel="Usuario" />
                <InputFormulario tipo="password" name="password" textoLabel="Contraseña" />
                <button onClick={(evento) => props.manejoClickForm(evento, 'notas')}>Ingresar</button>
            </form>
            <p className="registro">No tienes una cuenta?  
                <a onClick={(evento) => props.manejoClickForm(evento, 'registro')} href="./register">Registrate!</a>
            </p>            
        </>
    )
}

export default Login;