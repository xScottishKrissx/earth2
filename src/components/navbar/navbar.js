import * as React from 'react';
import './navbar.css';

import { Link } from 'gatsby';

import earth2Icon from '../../images/ico.png'

export const NavBar = (props) =>{
        
      return (
        <div className="navBarWrapper">

              <nav>

                <div className="mainLogoArea">
                  <Link to="/" >
                    <img src={earth2Icon} />
                    <h1>Earth 2</h1>
                  </Link>
               </div>

                {props.scrollToForm ? 
                  <span tabIndex={0} role="button" onClick={props.scrollToForm} onKeyDown={props.handleKeyDown}>Reserve your place</span> 
                : 
                null
                }

              </nav>

            

            
        </div>
      )
    
    }
    
    export default NavBar;