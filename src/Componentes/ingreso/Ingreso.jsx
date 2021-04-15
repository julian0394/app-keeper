import React from 'react';
import Login from './login/Login';
import Registro from './registro/Registro';
import './ingreso.css';

const Ingreso = (props) => {

    function alCambiarRuta(evento, nuevaRuta) {
        evento.preventDefault();
        props.cambioRuta(nuevaRuta);
    }

    return (  
        <div className="contenedor-ingreso">
            {props.ruta === 'login' 
                ? <Login 
                        ruta={props.ruta} 
                        cambioRuta={props.cambioRuta}
                        alCambiarRuta={alCambiarRuta} /> 
                : props.ruta === 'registro' && <Registro ruta={props.ruta} cambioRuta={props.cambioRuta} alCambiarRuta={alCambiarRuta} />
            }
        </div>
    );
}
 
export default Ingreso;