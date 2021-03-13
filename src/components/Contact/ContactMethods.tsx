import React, {FC} from 'react';
import 'font-awesome/css/font-awesome.min.css';

interface props{
    contactType:string,
    details:string,
}


const ContactMethods: FC<props> =({contactType,details})=> {
    return (
        <div className={"contact-div"}>
            
            <i className="fa fa-phone"></i>
            <h2 className={"contact-details"}>{details}</h2>
        </div>
    )
}

export default ContactMethods
