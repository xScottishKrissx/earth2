import * as React from 'react'

import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import './body.css'

import About from './about/about'
import Latest from './latest/latest'
import History from './history/history'

export const BodyWrapper = (props) =>{

  const data = useStaticQuery(graphql`
  query {
    allMdx {
      nodes {
        frontmatter{
          title,
          date,
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id,
        body,
        slug
      }
    }
  }
`
)
console.log(data.allMdx.nodes)


    return(
      
      <div className="bodyWrapper">

          <div className="bodyContent">
            <About />
            <Latest pageInfo={data.allMdx.nodes}/>
            <History />       
          </div>
          
      </div>
    )
    
    }
    
    export default BodyWrapper;