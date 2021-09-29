import * as React from 'react';
import './fixedImage.css'
export const FixedImage = (props) =>{

    const fadeImage = { opacity: props.scrollPos / 1000 || 1}

    return(
        <div className="backgroundWrapper">
            <div style={fadeImage} className="backgroundImage"></div>
            <span className="bannerText">endless possibilitiesss</span>
        </div>
    )

}

export default FixedImage;