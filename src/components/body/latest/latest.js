import * as React from 'react'

import './latest.css'

import purpleSpace from '../../../images/purplespace.jpg'

export const Latest = (props) =>{
    
return(
    <div className="latest">
    <h2>Latest News</h2>
    <div className="latestWrapper">

      <div className="column"> 
        <div>

          <div className="column-image">              
            <img src={purpleSpace} alt="" /> 
            <span className="overlay">Overlay</span>
          </div>

          <span>Date</span>
          <h3>Column Subtitle</h3>
        </div>             
      </div>

      <div className="column" id="middleColumn"> 
      <div>
          <div className="column-image">              
            <img src={purpleSpace} alt="" /> 
            <span className="overlay">Overlay</span>
          </div>

          <span>Date</span>
          <h3>Column Subtitle</h3>
        </div>               
      </div>

      <div className="column"> 
      <div>
        <div className="column-image">                
          <img src={purpleSpace} alt="" /> 
          <span className="overlay">Overlay</span>
        </div>

        <span>Date</span>
        <h3>Column Subtitle</h3>
        </div>                
      </div>


    </div>
    {/* <p>Load More +</p> */}
  </div>
)

}

export default Latest;