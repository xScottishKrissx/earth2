import * as React from 'react'

import { StaticImage } from 'gatsby-plugin-image'
// components
import Layout from '../components/layout'

import shuttle from '../images/shuttle.jpg'
import eclipse from '../images/eclipse.jpg'
import purpleSpace from '../images/purpleSpace.jpg'

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
        <h1>Earth 2</h1>
        <span>Reserve Your Place</span>
      </nav>
    </div>


{/* Fixed Image Area */}
    <div className="backgroundWrapper">
      <div className="backgroundImage"></div>
      <span className="bannerText">endless possibilities</span>
    </div>


{/* Scrolly Overlap Bit */}
    <div className="bodyWrapper">

      <div className="bodyContent">

        <div className="bodyContentAbout">
          <p>The Earth 2 project is about endless posibilities. It's about bold new horizons and opportunities for all mankind. Let's face it, Earth 1 had a good run but it's time to move on. Earth 2 will allow us to break free from the chains than bind us and launch us towards a brave new vision of what it means to be alive in the 22nd century and beyond.</p>

          <p>The first of us are already on the way and you can be a part of that too. Everyone on earth will be allocated a spot on the arks, but you can get access ahead of the curve by registering your interest now. All you need to do is act now because it's time to go. We need to leave. There isn't much time. Hurry.</p>
        </div>

        
        <div className="bodyContentImage" id="upperImage"><img src={eclipse} /></div>
        <div className="bodyContentImage" id="lowerImage"><img src={shuttle} /></div>

        <div className="bodyContentLatest">
          <h2>Latest News</h2>
          <div className="latestNewsSquaresWrapper">

            <div className="column"> 
              <div>

                <div className="column-image">              
                  <img src={purpleSpace} /> 
                  <span className="overlay">Overlay</span>
                </div>

                <span>Date</span>
                <h3>Column Subtitle</h3>
              </div>             
            </div>

            <div className="column" id="middleColumn"> 
            <div>
                <div className="column-image">              
                  <img src={purpleSpace} /> 
                  <span className="overlay">Overlay</span>
                </div>

                <span>Date</span>
                <h3>Column Subtitle</h3>
              </div>               
            </div>

            <div className="column"> 
            <div>
              <div className="column-image">                
                <img src={purpleSpace} /> 
                <span className="overlay">Overlay</span>
              </div>

              <span>Date</span>
              <h3>Column Subtitle</h3>
              </div>                
            </div>


          </div>
          {/* <p>Load More +</p> */}
        </div>


        <div className="bodyContentHistory">
          <div>
            <h2>History of Earth 2</h2>
            <p>After the event, the decision was made to relocate the entire human race to a new home. For a full history of that which we don't dare utter the words out loud, click the button below.</p>
            <button>Read more</button>
          </div>
        </div>
        
      </div>




    </div>

    <div className="contactFormWrapper">
      <div className="contactFormContent">
        <h1>Contact Form</h1>
      </div>
      </div>
      

      <div className="footerWrapper">
        <div className="footerContent">
          <h1>Footer 1</h1>
          <h1>Footer 2</h1>
        </div>
      </div>

    </main>
  )
}


export default IndexPage