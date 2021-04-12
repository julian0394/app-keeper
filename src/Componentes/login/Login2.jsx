import React from 'react';
import './login.css';
import InputFormulario from './inputFormulario/InputFormulario';


const Login2 = (props) => {
    function manejoClickForm(evento) {
        evento.preventDefault();
        // const rutaActual = props.ruta;
        props.setRuta();
    }

    return (  
        <div className="contenedor-login">
            {props.ruta === true ? <h1>Inicio de sesión</h1> : <h1>Registro de cuenta</h1>}
            <form action="post">
                <InputFormulario tipo="text" name="usuario" textoLabel="Usuario" />
                {props.ruta === false && <InputFormulario tipo="email" name="email" textoLabel="Mail ficticio" />}
                <InputFormulario tipo="password" name="contrasenia" textoLabel="Contraseña" />
                <button onClick={manejoClickForm}>{props.ruta === 'login' ? "Ingresar" : "Registrarse"}</button>
            </form>
            {props.ruta === true ? 
                <p className="registro">No tienes una cuenta? <a href="">Registrate!</a></p> :
                <p className="registro">Ya tienes una cuenta? <a href="">Ingresa!</a></p>
            } 
        </div>
    );
}
 
export default Login2;