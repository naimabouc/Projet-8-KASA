import { useState } from "react"
import "../sass/descriptionequipement.scss"

export function DescriptionEquipment (props) {
    const [isContentVisible, setIsContentVisible]= useState(false)

    const collapse = () => {
        setIsContentVisible(!isContentVisible);
    }
    return (
        <div className="Description">
            <p className="descriptionTitle">
                <span>{props.title}</span>
                <i className="fa-solid fa-chevron-up" onClick={collapse}></i>
            </p>
        
            {isContentVisible && <p className="descriptionContent">{props.content}</p>}

        </div>
    )
}
    
