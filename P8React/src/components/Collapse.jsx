import { useState } from "react"
import "../sass/collapse.scss"

function Collapse (props) {
    const [isContentVisible, setIsContentVisible]= useState(false)

    const collapsis = () => {
        setIsContentVisible(!isContentVisible);
    }
    return (
        <div className="Description">
            <p className="descriptionTitle">
                <span>{props.title}</span>
                <i className="fa-solid fa-chevron-up" onClick={collapsis}></i>
            </p>
        
            {isContentVisible && <p className="descriptionContent">{props.content}</p>}

        </div>
    )
}
    
export default Collapse;
