import * as React from 'react';
import './navbar.css';

export const NavBar = (props) =>{
        
      return (
        <div className="navBarWrapper">
            <nav>
                <h1>Earth 2</h1>
                <span tabIndex={0} role="button" onClick={props.scrollToForm} onKeyDown={props.handleKeyDown}>Reserve Your Place</span>
            </nav>
        </div>
      )
    
    }
    
    export default NavBar;