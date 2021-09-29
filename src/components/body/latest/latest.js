import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { Link  } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


import './latest.css'

import purpleSpace from '../../../images/purplespace.jpg'

export const Latest = (props) =>{
    

console.log(props.pageInfo)

// const image = getImage(props.pageInfo.frontmatter.hero_image)

return(
    <div className="latest">
    <h2>Latest News</h2>
    <div className="latestWrapper">

    {
      props.pageInfo.map(x => (

          <div className="column" key={x.id}> 
          <div>     
         
      
            <div className="column-image">              
              {/* <img src={x.frontmatter.hero_image.childImageSharp.gatsbyImageData.images.fallback.src} alt="" />  */}
              <GatsbyImage image={getImage(x.frontmatter.hero_image)} />
              <span className="overlay">Overlay</span>
            </div>
      
            <span>{x.frontmatter.date}</span>
            <div>{x.frontmatter.title}</div>
      
          </div>             
        </div>
        
      ))
    
    }



      {/* <div className="column"> 
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
      </div> */}


    </div>
    {/* <p>Load More +</p> */}
  </div>
)

}

export default Latest;