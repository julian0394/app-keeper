import React from 'react';
import Login from './login/Login';
import Registro from './registro/Registro';
import './ingreso.css';

const Ingreso = (props) => {

    function manejoClickForm(evento, nuevaRuta) {
        evento.preventDefault();
        props.cambioRuta(nuevaRuta);
    }

    return (  
        <div className="contenedor-ingreso">
            {props.ruta === 'login' 
                ? <Login ruta={props.ruta} cambioRuta={props.cambioRuta} manejoClickForm={manejoClickForm} /> 
                : props.ruta === 'registro' && <Registro ruta={props.ruta} cambioRuta={props.cambioRuta} manejoClickForm={manejoClickForm} />
            }
        </div>
    );
}
 
export default Ingreso;