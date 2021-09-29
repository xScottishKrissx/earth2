import * as React from 'react'

// import { StaticImage } from 'gatsby-plugin-image'
// components
// import Layout from '../components/layout'



import './index.css'
import NavBar from '../components/navbar/navbar.js'
import FixedImage from '../components/fixedImage/fixedImage'
import BodyWrapper from '../components/body/body'
import ContactForm from '../components/form/form'
import Footer from '../components/footer/footer'

export default class IndexPage extends React.Component {

  constructor(props){
      super(props);
      this.state = {
          showScrollToTopButton: false
      }


      if (this.state.isBrowser){ 
        window.addEventListener("scroll",this.scroll)
        window.addEventListener('submit', this.submitForm);
        document.addEventListener("keyup", this.handleKeyDown, false);
      }



      this.handleKey = this.handleKeyDown.bind(this);
  }

  componentDidMount(){
    if(typeof window !== 'undefined')this.setState({isBrowser: true})

    if (this.state.isBrowser){ 
      window.addEventListener("scroll",this.scroll)
      document.addEventListener("keyup", this.handleKeyDown, false);  
    }

  }
  
  submitForm = () => { alert("Submit Form") }

  scroll = () => {

    if (this.state.isBrowser){ 
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const windowBottom = windowHeight - window.pageYOffset;
        this.setState({ scrollPos:windowBottom })
    }


  }

  scrollToForm(){
    if(this.state.isBrowser){
      let getForm = document.getElementById("contactForm")
      getForm.scrollIntoView({behavior:"smooth"})
    }
  }

  handleKeyDown = (ev) => {
    let getForm;

    if(this.state.isBrowser){
      // To Form - F
      if (ev.keyCode === 70) {
        getForm = document.getElementById("contactForm") 
        getForm.scrollIntoView({behavior:"smooth"})
      }
      // To Top - T
      if(ev.keyCode === 84 ){
        getForm = document.getElementById("topOfPage")
        getForm.scrollIntoView({behavior:"smooth"})
      } 

      if (ev.keyCode === 13) {
        getForm = document.getElementById("contactForm") 
        getForm.scrollIntoView({behavior:"smooth"})
      }else{
        // do nothing
      }
  }
    
  }



  componentWillUnmount(){
    if (this.state.isBrowser){ 
      window.removeEventListener('scroll', this.scroll);        
      window.removeEventListener('keyup',this.handleKeyDown, {passive:true});
    }

  }

  render(){
    
      return (

          <main className="mainWrapper" id="topOfPage">
      
          {/* <Layout pageTitle="Home Page">
            <p  className={test}>I'm making this by following the Gatsby Tutorial.</p>
            <StaticImage 
              alt="earth2"
              src="https://images.pexels.com/photos/796206/pexels-photo-796206.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            />
          </Layout> */}
      
            <NavBar scrollToForm={()=>this.scrollToForm()} handleKeyDown={()=>this.scrollToForm()} />
            <FixedImage scrollPos={this.state.scrollPos} />
            <BodyWrapper />
            <ContactForm />
            <Footer />

            
      

          </main>
        )
  }

}
