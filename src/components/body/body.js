import * as React from 'react'
import './body.css'

import About from './about/about'
import Latest from './latest/latest'
import History from './history/history'

export const BodyWrapper = (props) =>{
    
    return(
      
      <div className="bodyWrapper">

          <div className="bodyContent">
            <About />
            <Latest />
            <History />       
          </div>
          
      </div>
    )
    
    }
    
    export default BodyWrapper;