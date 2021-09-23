import { FC, useState } from 'react'
import Headings from '../Common/Headings/Headings'
import '../About/About.scss'

const About: FC = () => {
    return (
        <div className={"contact-background"}>
            <Headings headingOne={"ABOUT"} headingTwo={"Who Am I"} paragraph={""}/>
            <p className={"about-paragraph"}>I am willing to learn and can adapt to any situation. 
                My greatest personal trait is that I love solving problems and 
                I persevere until I solve them. I can work on my own and also in a team. 
                My main objective in life is that my work will benefit the company 
                I work for, myself, and the people around me. I enjoy staying on top 
                of market trends such as new technologies and trending programming languages. 
                As a result, I ensure to update my knowledge to have at least a basic 
                understanding of how it works.</p>
        </div>
    )
}

export default About
