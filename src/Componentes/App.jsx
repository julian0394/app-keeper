
import React, {useState} from 'react';

import Header from './header/Header';
import Footer from './footer/Footer';
import Nota from './nota/Nota';
import AreaNuevaNota from './areaNuevaNota/AreaNuevaNota';
import Login from './login/Login';
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

    //STATE DE RUTA PARA INICIO DE SESIÓN, REGISTRO Y USO
    const [ruta, setRuta] = useState('login');

    function cambiarRuta(destino) {
        setRuta(destino);
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
            <div className="div-logeado"> 
                <Login />
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
            </div>   
            <Footer />
        </>
    );
}

export default App;