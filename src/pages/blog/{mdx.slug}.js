import * as React from 'react'
import Layout from '../../components/layout'

import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BlogPost = ({data}) => {

console.log(data)

const image = getImage(data.mdx.frontmatter.hero_image)

return (
    <div>

      <Layout>
        <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
        <h2>{data.mdx.frontmatter.title}</h2>
    



      {/* This will break if it's put on one line */}
          <MDXRenderer> 
            {data.mdx.body}
           </MDXRenderer>  
      </Layout>
    </div>

)



console.log(data)











  // Old Version
//   const image = getImage(data.mdx.frontmatter.hero_image)
//   return (
//     <Layout pageTitle="Super Cool Blog Posts" other="Hello1">
//       <p>{data.mdx.frontmatter.date}</p>

//       <GatsbyImage
//         image={image}
//         alt={data.mdx.frontmatter.hero_image_alt}
//       />
//       <h1>Hello</h1>
//       <MDXRenderer> 
//         {data.mdx.body}
//       </MDXRenderer>
//     </Layout>
//   )
}

export const query = graphql `
    query($id: String){
      mdx(id: {eq: $id}) {
        frontmatter {
          title,
          date,
          hero_image_alt,
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        body
      }
    }
  `

export default BlogPost