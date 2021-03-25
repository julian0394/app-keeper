import React from 'react';

function Nota(props) {
    return (
        <div className="note">
            <h1>{props.titulo}</h1>
            <p>{props.contenido}</p>
            <button onClick={ () => {
                props.btnBorrar(props.id);
            }}>BORRAR</button>
        </div>
    );
}

export default Nota;