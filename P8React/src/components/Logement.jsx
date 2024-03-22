import {useParams } from "react-router-dom";
import logements from "../data/logements.json";
import { DescriptionEquipment } from "./DescriptionEquipment";


function findLogementID (id) {
    return logements.find((logement) =>logement.id === id)
}
function Logement (props) {
    const{id} = useParams();
    const logement = findLogementID(id);
    const pictures = logement.pictures;
    
    return (
        <div className="logement">
            <div className="pictures">
                {pictures.map((picture, index) => {
                   return (
                      <img src={picture} alt={picture.title} key={(picture, index)}/>
                    );
                  })}
            </div>
           <div className="appartmentHeader">
                <div className="title">
                    <h1>{logement.title}</h1>
                    <h2>{logement.location}</h2>
                </div>  
                
                <div className="hostandrating">
                    <div className="host">
                        <h2 className="hostName">{logement.host.name}</h2>
                        <img className="hostImg" src ={logement.host.picture} alt="" />
                    </div>
                    <div className="rating">
                        {[1, 2, 3, 4, 5].map((num)=> <span key={num} className={logement.rating > num ? "on" : ""}>★</span>)}
                    </div>
                </div>
            </div>
            <div className="tags">
                <span className="containertags">
                        {logement.tags.map((tag, id) => (
                        <span className="tag" key={`${tag}-${id}`}>{ tag}</span>
                     ) )}
                </span>
            </div>

            <div className="apartmentDescriptionArea">
                <DescriptionEquipment title="Description" content={logement.description} />
                <DescriptionEquipment title="Equipements" content={logement.equipments.map((equipments) => (
                <li className="equipmentslist" key={`${equipments}`}>{ equipments}</li>
            ) )} />
            </div>
            

           
     </div>  
    )
}
export default Logement;

