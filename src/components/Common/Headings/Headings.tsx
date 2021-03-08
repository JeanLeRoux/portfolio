import React, { FC } from 'react'
import "../Headings/Headings.scss"

interface props{
    headingOne:string,
    headingTwo:string,
    paragraph:string
}
const Headings: FC<props> = ({headingOne,headingTwo,paragraph}) => {
    return (
        <div>
            <h2 className={"heading1"}>{headingOne}</h2>
            <h1 className={"heading2"}>{headingTwo}</h1>
            <p className={"section-paragraph"}>{paragraph}</p>
        </div>
    )
}

export default Headings;
