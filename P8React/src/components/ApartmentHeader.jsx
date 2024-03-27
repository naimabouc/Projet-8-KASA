import React from "react";
import "../sass/logement.scss";


function ApartmentHeader (props) {
    
    return ( 
    <div className="Apartment">
        <div className="appartmentHeader">
            <div className="title">
                <h1>{props.logement.title}</h1>
                <h2>{props.logement.location}</h2>
            </div>
        
            <div className="hostandrating">
                    <div className="host">
                        <h2 className="hostName">{props.logement.host.name}</h2>
                        <img className="hostImg" src ={props.logement.host.picture} alt="" />
                    </div>
                    <div className="rating">
                    {[1, 2, 3, 4, 5].map((num)=> <span key={num} className={props.logement.rating > num - 1 ? "on" : ""}>★</span>)}
                    </div> 
            </div>
        </div> 
        <div className="tags">
                <span className="containertags">
                        {props.logement.tags.map((tag, id) => (
                        <span className="tag" key={`${tag}-${id}`}>{ tag}</span>
                     ) )}
                </span>
        </div>
    </div>                        
        
    
    
    

)
}
export default ApartmentHeader;