import * as React from 'react'

import { useStaticQuery, graphql } from 'gatsby';

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
          title
        }
        id
      }
    }
  }
`
)
console.log(data.allMdx.nodes)
const myMap = data.allMdx.nodes.map(x => {
  return (
    <div key={x.id}>{x.frontmatter.title}</div>
  )
})

    return(
      
      <div className="bodyWrapper">

          <div className="bodyContent">
            {myMap}
            <About />
            <Latest />
            <History />       
          </div>
          
      </div>
    )
    
    }
    
    export default BodyWrapper;