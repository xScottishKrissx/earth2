import * as React from 'react'

import { StaticImage } from 'gatsby-plugin-image'
// components
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <main>

    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage 
        alt="earth2"
        src="https://images.pexels.com/photos/796206/pexels-photo-796206.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
      />
    </Layout>

    </main>
  )
}


export default IndexPage