import * as React from 'react';
import './footer.css'
import shenanigans from '../../images/shenanigans.png'
import earth2Icon from '../../images/ico.png'
export const Footer = (props) =>{

    function scrollTop(){
      if(props.isBrowser){
        window.scrollTo({
          top:0,
          left:0,
          behavior:"smooth"
        })
      }else;

    }

    return(
      <>
        <div className="footerWrapper">

          <div className="footerContent">
            
            <div id="footerLeft">
              {/* <h1>Earth 2</h1>  */}
              <img src={earth2Icon} />
              <span>| adventure awaits</span>
            </div>

            <div id="footerRight">
              <p>For more information: <br/> <span>earth2@human.gov</span></p>
            </div>
            
          </div>
          <img id="shenanigans" src={shenanigans} alt="kfsvaisefnoskvnovbosdjajsbgbsdbv" />
          
        </div>

        <div role="button" tabIndex={0} className="footerBlock" onClick={()=>scrollTop()} onKeyDown={()=>scrollTop()}>
          <span className="material-icons" title="scroll to top of page">keyboard_capslock</span>
        </div>
        
      </>
    )
    
    }
    
    export default Footer;