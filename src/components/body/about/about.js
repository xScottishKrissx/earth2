import * as React from 'react'

import './about.css'

import shuttle from '../../../images/shuttle.jpg'
import eclipse from '../../../images/eclipse.jpg'

export const About = (props) =>{
    
    return(
        <>

        <div className="aboutText">

          <p>The Earth 2 project is about endless posibilities. It's about bold new horizons and opportunities for all mankind. Let's face it, Earth 1 had a good run but it's time to move on. Earth 2 will allow us to break free from the chains than bind us and launch us towards a brave new vision of what it means to be alive in the 22nd century and beyond.</p>

        </div>

        
        <div className="aboutImage" id="upperImage">
            <img src={eclipse} alt="the eclipse the end of all things"/>
        </div>

        <div className="aboutText">
          <p>The first of us are already on the way and you can be a part of that too. Everyone on Earth 1 will be allocated a spot on the arks, but you can get access ahead of the curve by registering your interest now. All you need to do is act now because it's time to go. We need to leave. There isn't much time. Hurry.</p>
        </div>


        <div className="aboutImage" id="lowerImage">
            <img src={shuttle} alt="a shuttle taking us to salvation" />
        </div>

        </>
    )
    
    }
    
    export default About;