import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { Link  } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


import { MDXRenderer } from 'gatsby-plugin-mdx'
import './latest.css'

export const Latest = (props) =>{
    

console.log(props.pageInfo.slice(0,3))

// const image = getImage(props.pageInfo.frontmatter.hero_image)


// I think this will need to become a state component in order to update the page on button click.
let array1 = props.pageInfo.slice(0,3)
let array2 = props.pageInfo.slice(3,6)

console.log(array1)
console.log(array2)


return(
    <div className="latest">
    <h2>Latest News</h2>
    <div className="latestWrapper">

    {
      array1.map(x => (

          <div className="column" key={x.id}> 
          <div>     
         
      
            <div className="column-image">              
              <GatsbyImage image={getImage(x.frontmatter.hero_image)} alt="" />
              <span className="overlay">Overlay</span>
            </div>
      
            <span>{x.frontmatter.date}</span>
            <div><Link to={`/blog/${x.slug}`}>{x.frontmatter.title}</Link></div>

            
           {/* <MDXRenderer>{x.body}</MDXRenderer>  */}
            
      
          </div>             
        </div>
        
      ))
    
    }
    
    </div>
    <button>Load More</button>
  </div>
)

}

export default Latest;