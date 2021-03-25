
import React, {useState} from 'react';

import Header from './Header';
import Footer from './Footer';
import Nota from './Nota';
import AreaNuevaNota from './AreaNuevaNota'
// import notas from '../notas';

function App() {
    //STATE DE NOTA
    const [nota, setNota] = useState({});
    
    function setearNota(nuevaNota) {
        setNota(nuevaNota);
        agregarNuevasNotas(nuevaNota);
    }

    //STATE DE LISTA DE NOTAS
    const [listaNotas, setListaNotas] = useState([]);

    function agregarNuevasNotas(nuevaNota) {
        setListaNotas( (valorPrevio) => {
            return [...valorPrevio, nuevaNota]
        });
    }

    function borrarNota(indiceABorrar) {
        setListaNotas((valorPrevio) => {
            return valorPrevio.filter(
                (elemento, index) => {
                    return index !==  indiceABorrar; 
                }
            );
        });
    }

    return (
        <>
            <Header />
            <AreaNuevaNota setearNota={setearNota} agregarNuevasNotas={agregarNuevasNotas} />
            {listaNotas.length === 0 ? 
                <div className="div-sin-notas">No hay notas que mostrar</div> : 
                <div className="lista-notas">
                    <ul>
                        {listaNotas.map( (notita, indice) => {
                            return <Nota 
                            key={indice} 
                            id={indice} 
                            titulo={notita.titulo} 
                            contenido={notita.contenido}
                            btnBorrar={borrarNota}
                            />
                        })}               
                    </ul>
                </div>}
            
            <Footer />
        </>
    );
}

export default App;