import React from 'react'
import '../Intro/Intro.scss';
import personalImage from '../../Assets/personalImage.png';

export default function Intro() {
    return (
        <div className={"component-background"}>
            <div className={"navbar"}>
                <h1 className={"logo"}>JLR<span className={"logo-dot"}>.</span></h1>
                <div className={"link-container"}>
                    <h3 className={"links"}>HOME</h3>
                    <h3 className={"links"}>PORTFOLIO</h3>
                    <h3 className={"links"}>CONTACT</h3>
                </div>
                
            </div>
            <div className={"content"}>
                {/* <div>
                    <h1 className={"name-heading"}>Jean <br></br> Le Roux.</h1>
                </div> */}
                <div className={"image-container"}>
                    <div className={"background-shape"}/>  
                    <img className={"personal-image"} src={personalImage}/>
                </div>
            </div>
            
        </div>
    )
}
