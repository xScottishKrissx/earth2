import * as React from 'react';
import './footer.css'
import shenanigans from '../../images/shenanigans.png'

export const Footer = (props) =>{
    
    return(
      <>
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
          <img src={shenanigans} />
        </div>

        <div className="footerBlock"></div>
        
      </>
    )
    
    }
    
    export default Footer;