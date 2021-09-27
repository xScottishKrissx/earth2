import * as React from 'react'
import {Link } from 'gatsby'
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
        src="./images/main.jpeg"
      />
    </Layout>

    </main>
  )
}


export default IndexPage