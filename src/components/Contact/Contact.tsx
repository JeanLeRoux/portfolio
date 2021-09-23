import { FC, useState } from 'react'
import Headings from '../Common/Headings/Headings'
import '../Contact/Contact.scss'
import ContactMethods from './ContactMethods'

interface contact{
    contactType:string,
    icon: string,
    details:string
}

const Contact: FC = () => {
    const [contactDetails, ] = useState<contact[]>([
        {
            "contactType":"Phone",
            "icon":"fa fa-phone",
            "details":"072 759 4041"
        },
        {
            "contactType":"Linkedin",
            "icon":"fa fa-linkedin",
            "details":"http://linkedin.com/in/jean-le-roux-43306019b"
        },
        {
            "contactType":"Email",
            "icon":"fa fa-envelope",
            "details":"jeanlr14@gmail.com"
        },
    ]);
    return (
        <div className={"contact-background"}>
            <Headings headingOne={"CONTACT US"} headingTwo={"Ways To Contact Me"} paragraph={""}/>
        
            <div className={"contact-method-container"}> 
                {contactDetails.map((information)=>(<ContactMethods icon={information.icon} details={information.details}/>))}
                
            </div>
        </div>
    )
}

export default Contact
