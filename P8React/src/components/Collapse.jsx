import { useState } from "react"
import "../sass/collapse.scss"

function Collapse (props) {
    const [isContentVisible, setIsContentVisible]= useState(false) 

    const collapsis = () => {
        setIsContentVisible(!isContentVisible); 
    
       }
   
    return (
        <div className="Description">
            <ul className="descriptionTitle">
                <span>{props.title}</span>
                <i className={isContentVisible ? "fa-solid fa-chevron-up rotate": "fa-solid fa-chevron-up" }   onClick={collapsis}></i>
            </ul>
        
            {isContentVisible && <p className="descriptionContent">{props.content}</p>}

        </div>
    )
}
    
export default Collapse;
