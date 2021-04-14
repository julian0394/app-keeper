import React, {useState, useEffect} from 'react';

import Header from './header/Header';
import Footer from './footer/Footer';
import Nota from './nota/Nota';
import AreaNuevaNota from './areaNuevaNota/AreaNuevaNota';
import Ingreso from './ingreso/Ingreso';

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

    //STATE DE RUTA PARA INICIO DE SESIÓN, REGISTRO Y USO
    const [ruta, setRuta] = useState('login'); // Se manejaran 3 estados: login, signup y notas.

    function cambioRuta(nuevaRuta) {  
        setRuta(nuevaRuta)
    }

    //METODO QUE SE ACTIVA AL RENDERIZARSE EL COMPONENTE APP
    useEffect( ()=> {
        fetch('http://localhost:3000')
        .then( response => response.json() )
        .then( data => console.log(data) )
    })

    return (
        <>
            <Header ruta={ruta} cambioRuta={cambioRuta} />           
            <div className="div-logeado"> 
                {/* {(ruta === 'login' || ruta === 'registro') && <Login2 ruta={ruta} cambioRuta={cambioRuta} />} */}
                {(ruta === 'login' || ruta === 'registro') && <Ingreso ruta={ruta} cambioRuta={cambioRuta} />}
                {ruta === 'notas' && <AreaNuevaNota setearNota={setearNota} agregarNuevasNotas={agregarNuevasNotas} />}
                {ruta === 'notas' && listaNotas.length === 0 
                    ? <div className="div-sin-notas">No hay notas que mostrar</div> 
                    : ruta === 'notas' &&
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