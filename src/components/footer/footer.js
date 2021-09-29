import * as React from 'react';
import './footer.css'

export const Footer = (props) =>{
    
    return(
        <div className="footerWrapper">

        <div className="footerContent">
          
          <div id="footerLeft">
            <h1>Earth 2</h1> 
            <span>| a new adventure</span>
          </div>

          <div id="footerRight">
            <p>For more information: <br/> <span>earth2@human.gov</span></p>
          </div>

        </div>

        <div className="footerBlock"></div>
        
      </div>
      
    )
    
    }
    
    export default Footer;