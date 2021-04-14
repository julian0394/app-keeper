import React from 'react';

const InputFormulario = (props) => {
    return (  
        <div className="input-form">
            <input type={props.tipo} name={props.nombre} placeholder=" " required />
            <label className="no-seleccionable">{props.textoLabel}</label>
        </div>
    );
}
 
export default InputFormulario;