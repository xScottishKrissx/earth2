import * as React from 'react'

// import { StaticImage } from 'gatsby-plugin-image'
// components
// import Layout from '../components/layout'

import shuttle from '../images/shuttle.jpg'
import eclipse from '../images/eclipse.jpg'
import purpleSpace from '../images/purpleSpace.jpg'

import './index.css'


export default class IndexPage extends React.Component {

  constructor(props){
      super(props);
      this.state = {
          showScrollToTopButton: false
      }
      window.addEventListener("scroll",this.scroll)
  }

  componentDidMount(){
    window.addEventListener("scroll",this.scroll)
  }
  
  submitForm (){ alert("Submit Form") }

  scroll = () => {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const windowBottom = windowHeight - window.pageYOffset;
    // console.log(windowBottom)
    // console.log(windowBottom / 1000)
    // alert("Scroll")

    this.setState({
      scrollPos:windowBottom
    })

  }

  scrollToForm(){
    let getForm = document.getElementById("contactForm")
    getForm.scrollIntoView({behavior:"smooth"})
  }
  render(){
    
    const styleTest = {
      opacity: this.state.scrollPos / 1000,     
    }

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
              <span onClick={()=>this.scrollToForm()}>Reserve Your Place</span>
            </nav>
          </div>
      
      
      {/* Fixed Image Area */}
          <div className="backgroundWrapper">
            <div style={styleTest} className="backgroundImage"></div>
            <span className="bannerText">endless possibilitiesss</span>
          </div>
      
      
      {/* Scrolly Overlap Bit */}
          <div className="bodyWrapper">
      
            <div className="bodyContent">
      
              <div className="bodyContentAbout">
                <p>The Earth 2 project is about endless posibilities. It's about bold new horizons and opportunities for all mankind. Let's face it, Earth 1 had a good run but it's time to move on. Earth 2 will allow us to break free from the chains than bind us and launch us towards a brave new vision of what it means to be alive in the 22nd century and beyond.</p>
      
              </div>
      
              
              <div className="bodyContentImage" id="upperImage"><img src={eclipse} alt="the eclipse the end of all things"/></div>
      
              <div className="bodyContentAbout">
                <p>The first of us are already on the way and you can be a part of that too. Everyone on Earth 1 will be allocated a spot on the arks, but you can get access ahead of the curve by registering your interest now. All you need to do is act now because it's time to go. We need to leave. There isn't much time. Hurry.</p>
              </div>
      
      
              <div className="bodyContentImage" id="lowerImage"><img src={shuttle} alt="a shuttle taking us to salvation" /></div>
      
              <div className="bodyContentLatest">
                <h2>Latest News</h2>
                <div className="latestNewsSquaresWrapper">
      
                  <div className="column"> 
                    <div>
      
                      <div className="column-image">              
                        <img src={purpleSpace} alt="" /> 
                        <span className="overlay">Overlay</span>
                      </div>
      
                      <span>Date</span>
                      <h3>Column Subtitle</h3>
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
      
          <div className="contactFormWrapper" id="contactForm">
            <div className="contactFormContent">
      
              <div className="contactFormIntro">
                <h1>Earth 2 Ark Registration</h1>
                <p>Using this form you can confirm your interest in being a vital part of this exciting new adventure for the human race.</p>
                <p>Just fill out the form and before long, adventure awaits.</p>
              </div>
      
              <div className="contactForm">
      
                <form action={()=>this.submitForm()}>
      
                  <span className="contactFormInput">
                    <label htmlFor="firstName">First Name*</label>
                    <input type="text" id="firstName" name="firstName" placeholder="" required />
                  </span>
      
                  <span className="contactFormInput">
                    <label htmlFor="lastName">Last Name*</label>
                    <input type="text" id="lastName" name="lastName" placeholder="" required />
                  </span>
      
                  <span className="contactFormInput">
                    <label htmlFor="hdn">Human Identity Number*</label>
                    <input htmlFor="text" id="hdn" name="hdn" placeholder="" required />
                  </span>
      
                  <span className="contactFormInput">
                    <label htmlFor="livingZone">Living Zone*</label>
                    <input type="text" id="livingZone" name="livingZone" placeholder="" required />
                  </span>
      
                  <span className="contactFormInput">
                    <label htmlFor="eyeColour">Eye Colour*</label>            
                    <select id="eyeColour" name="eyeColour" placeholder="" required>
                      <option value=""> -- Select --</option>
                      <option value="Blue">Blue</option>
                      <option value="green">Green</option>
                      <option value="hazel">Hazel</option>
                      <option value="other">Other</option>
                    </select>
                  </span>
      
      
                  <div className="formCheckboxSection">
                    <p>Earth 2 Support Requirements</p>
                    
                    <div className="formCheckboxes">
                      <span>
                        <input type="checkbox" id="housing" name="housing" /> 
                        <label htmlFor="housing">Housing</label>
                      </span>
                      
                      <span>
                        <input type="checkbox" id="security" name="security"  /> 
                        <label htmlFor="security">Security</label>
                      </span>
                      
                      <span>
                        <input type="checkbox" id="employment" name="employment"  /> 
                        <label htmlFor="employment">Employment</label>
                      </span>
                      
                      <span>
                        <input type="checkbox" id="healthcare" name="healthcare"  /> 
                        <label htmlFor="healthcare">Healthcare</label>
                      </span>
      
                      <span>
                        <input type="checkbox" id="oxygen" name="oxygen"  /> 
                        <label htmlFor="oxygen">Oxygen</label>
                      </span>
      
                    </div>
      
                  </div>
       
                
      
                <p>You will be contacted directly by your local adminstration official in the event your application is approved</p>
                <p>This form does not constitute a contract or promise of entry onto an Ark. Only suitable applicants matching certain criteria will be considered. Repeated failed applications will result in lowered credit score and reduced rations.</p>
      
                <div className="submitForm">
                  <span className="submitFormBtn">
                    <input type="submit" value="Submit" />
                  </span>
                </div>
      
                <div className="formTerms">
                  <span id="terms">Terms &#38; Conditions</span>
                  <span>*Required Fields</span>
                </div>
                </form>
              </div>
            </div>
            </div>
            
      
            <div className="footerWrapper">
              <div className="footerContent">
                
                <div id="footerLeft">
                  <h1>Earth 2</h1> 
                  <span>| a new adventure</span>
                </div>
      
                <div id="footerRight">
                  <p>For more information: <br/> <span>earth2@human.gov</span></p>
                </div>
      
              </div>
      
              
            </div>
            <div className="footerBlock"></div>
          </main>
        )
  }

}
