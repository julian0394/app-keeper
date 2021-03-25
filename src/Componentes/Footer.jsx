import React from 'react';

// Año automatico para copyright.
const anio = new Date().getFullYear(); //"Anio" para no usar Ñ.

function Footer() {
    return <footer><p>Copyright ⓒ - Juli Pérez - {anio}</p></footer>
}

export default Footer;