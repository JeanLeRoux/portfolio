import React, { FC } from 'react'
import Headings from '../Common/Headings/Headings'
import '../Contact/Contact.scss'
import ContactMethods from './ContactMethods'

const Contact: FC = () => {
    return (
        <div className={"contact-background"}>
            <Headings headingOne={"CONTACT US"} headingTwo={"Ways To Contact Me"} paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
        
            <div className={"contact-method-container"}> 
                <ContactMethods/>
                <ContactMethods/>
                <ContactMethods/>
            </div>
        </div>
    )
}

export default Contact
