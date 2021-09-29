import * as React from 'React';

export const NavBar = (props) =>{
        
      return (
        <div className="navBarWrapper">
            <nav>
                <h1>Earth 2</h1>
                <span onClick={props.scrollToForm} onKeyDown={props.handleKeyDown}>Reserve Your Place</span>
            </nav>
        </div>
      )
    
    }
    
    export default NavBar;