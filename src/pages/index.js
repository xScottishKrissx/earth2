import * as React from 'react'

import { StaticImage } from 'gatsby-plugin-image'
// components
import Layout from '../components/layout'

import './index.css'

const IndexPage = () => {
  return (
    <main className="mainWrapper" >

    {/* <Layout pageTitle="Home Page">
      <p  className={test}>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage 
        alt="earth2"
        src="https://images.pexels.com/photos/796206/pexels-photo-796206.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
      />
    </Layout> */}

{/* Navbar */}
    <div className="navBarWrapper">
      <nav>
        <h1>Navbar</h1>
        <h1>Navbar</h1>
      </nav>
    </div>


{/* Fixed Image Area */}
    <div className="backgroundWrapper">
      <div className="backgroundImage">
       <span className="testContent">Image</span>
      </div>
    </div>


{/* Scrolly Overlap Bit */}
    <div className="bodyWrapper">

      <div className="bodyContent">
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
      </div>

      <div className="contactFormWrapper">
        <h1>Contact Form</h1>
      </div>

      <div className="footerWrapper">
        <div className="footerContent">
          <h1>Footer 1</h1>
          <h1>Footer 2</h1>
        </div>
      </div>
    </div>



    </main>
  )
}


export default IndexPage