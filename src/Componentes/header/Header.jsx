import React from 'react';
import './header.css';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

function Header() {
    return (
        <header>
            <h1 className="no-seleccionable"><EmojiObjectsIcon /> Keeper</h1> 
        </header>
    );
}

export default Header;
 