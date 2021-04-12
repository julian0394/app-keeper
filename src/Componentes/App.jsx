
import React, {useState} from 'react';

import Header from './header/Header';
import Footer from './footer/Footer';
import Nota from './nota/Nota';
import AreaNuevaNota from './areaNuevaNota/AreaNuevaNota';
import Login from './login/Login';
import Login2 from './login/Login2';
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
    const [ruta, setRuta] = useState('login'); // Se manejaran 3 estados: login, signup y notas.

    function cambioRuta(nuevaRuta) {  
        setRuta(nuevaRuta)
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
            <Header ruta={ruta} cambioRuta={cambioRuta} />           
            <div className="div-logeado"> 
                {(ruta === 'login' || ruta === 'signup') && <Login2 ruta={ruta} cambioRuta={cambioRuta} />}
                {ruta === 'notas' && <AreaNuevaNota setearNota={setearNota} agregarNuevasNotas={agregarNuevasNotas} />}
                {/* <Login2 ruta={ruta} cambioRuta={cambioRuta} />
                <AreaNuevaNota setearNota={setearNota} agregarNuevasNotas={agregarNuevasNotas} /> */}
                {ruta === 'notas' && listaNotas.length === 0 ? 
                    <div className="div-sin-notas">No hay notas que mostrar</div> : 
                 ruta === 'notas' &&
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
                    </div>
                }
            </div>   
            <Footer />
        </>
    );
}

export default App;