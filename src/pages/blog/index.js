import * as React from 'react'
import Layout from '../../components/layout'

import { Link, graphql  } from 'gatsby'

const BlogPage = ({data}) => {

  


  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
          {
              data.allMdx.nodes.map(nodes => (
                  <li key={nodes.id}>
                      <h3><Link to={`/blog/${nodes.slug}`}>{nodes.frontmatter.title}</Link></h3>
                      <p>{nodes.frontmatter.date}</p>
                  </li>
              ))
          }
      </ul>
    </Layout>
  )
}

export const query = graphql`
    query {
        allMdx(sort: {order: ASC, fields: frontmatter___date}) {
            nodes {
              frontmatter {
                date
                title
              }
              id
              slug
            }
        }
    }`

export default BlogPage