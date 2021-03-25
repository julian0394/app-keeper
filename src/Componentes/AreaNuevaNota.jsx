import React, {useState} from 'react';

const AreaNuevaNota = (props) => {
    //State de los input ingresados ne la nueva nota
    const [input, setInput] = useState({
        titulo: '',
        contenido: '',
    });

    function manejoCambioInput(evento) {
        const {name, value} = evento.target;
        
        setInput( (valorPrevio) => {
            if (name === 'titulo')
                return {
                    titulo: value,
                    contenido: valorPrevio.contenido,
                }
            else
                return {
                    titulo: valorPrevio.titulo,
                    contenido: value,
                }
        });
    }

    function manejoClickSubmit(event) {
        event.preventDefault();
        props.setearNota(input)
        setInput({titulo: '', contenido: ''})
    }
    
    return ( 
        <div>
            <form>
                <input 
                    onChange={manejoCambioInput}
                    value={input.titulo}
                    className="tituloNuevaNota" 
                    name="titulo" 
                    placeholder="Titulo"
                 />
                <textarea 
                    onChange={manejoCambioInput}
                    value={input.contenido}
                    name="contenido" 
                    placeholder="Escriba una nota..." 
                    rows="3"
                 />
                <button 
                    className="btn-agregar"
                    type="submit"
                    onClick={manejoClickSubmit}
                >+</button>
            </form>
        </div>
    );
}
 
export default AreaNuevaNota;