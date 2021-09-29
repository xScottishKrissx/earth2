import * as React from 'react'
import './form.css'

export const ContactForm = (props) =>{
    
    return(
        <div className="contactFormWrapper" id="contactForm">
        <div className="contactFormContent">
  
          <div className="contactFormIntro">
            <h1>Earth 2 Ark Registration</h1>
            <p>Using this form you can confirm your interest in being a vital part of this exciting new adventure for the human race.</p>
            <p>Just fill out the form and before long, adventure awaits.</p>
          </div>
  
          <div className="contactForm">
  
            <form>
  
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
    )
    
    }
    
    export default ContactForm;