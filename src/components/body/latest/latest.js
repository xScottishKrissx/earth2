import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { Link  } from 'gatsby'

import './latest.css'

import purpleSpace from '../../../images/purplespace.jpg'

export const Latest = ({prop}) =>{
    

console.log(prop)

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
          <div>
             </div>

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