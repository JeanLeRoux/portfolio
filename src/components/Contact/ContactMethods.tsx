import {FC} from 'react';
import 'font-awesome/css/font-awesome.min.css';

interface props{
    icon: string,
    details:string,
}


const ContactMethods: FC<props> =({icon, details})=> {
    return (
        <>
        <div className={"contact-div"}>
            <h2 className={"contact-details"}><span className={[icon,"contact-icons"].join(" ")}/>{details}</h2>
        </div>
        </>
    )
}

export default ContactMethods


