import * as React from 'react';
import './navbar.css';

import { Link } from 'gatsby';

export const NavBar = (props) =>{
        
      return (
        <div className="navBarWrapper">

              <nav>

                <h1><Link to="/" >Earth 2</Link></h1>
                {props.scrollToForm ? 
                  <span tabIndex={0} role="button" onClick={props.scrollToForm} onKeyDown={props.handleKeyDown}>Reserve your place</span> 
                : 
                <span tabIndex={0} role="button" onClick={props.scrollToForm} onKeyDown={props.handleKeyDown}><Link to="/#formAnchor" >Reserve your place</Link></span>
                }

              </nav>

            

            
        </div>
      )
    
    }
    
    export default NavBar;