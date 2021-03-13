import React, { FC, useState } from 'react'
import Headings from '../Common/Headings/Headings'
import '../Contact/Contact.scss'
import ContactMethods from './ContactMethods'

interface contact{
    contactType:string,
    details:string
}

const Contact: FC = () => {
    const [contactDetails, setContactDetails] = useState<contact[]>([
        {
            "contactType":"Phone",
            "details":"072 759 4041"
        },
        {
            "contactType":"Linkedin",
            "details":"http://linkedin.com/in/jean-le-roux-43306019b"
        },
        {
            "contactType":"Email",
            "details":"jeanlr14@gmail.com"
        },
    ]);
    return (
        <div className={"contact-background"}>
            <Headings headingOne={"CONTACT US"} headingTwo={"Ways To Contact Me"} paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
        
            <div className={"contact-method-container"}> 
                {contactDetails.map((information)=>(<ContactMethods contactType={information.contactType} details={information.details}/>))}
                
            </div>
        </div>
    )
}

export default Contact
