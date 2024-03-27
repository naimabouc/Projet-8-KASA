import { useEffect } from "react";
import {useNavigate, useParams } from "react-router-dom";
import logements from "../data/logements.json";
import Caroussel from "./Caroussel";
import { useState } from "react";
import ApartmentHeader from "./ApartmentHeader";
import  Collapse  from "./Collapse";
import "../sass/logement.scss";


function findLogementID (id) {
    return logements.find((logement) =>logement.id === id)
}
function Logement () {
    const{id} = useParams();
    const logement = findLogementID(id);
    return (
        <div>
            <Caroussel images={logement.pictures} />
            <ApartmentHeader logement={logement}/>
            <div className="apartmentDescriptionArea">
                <Collapse title="Description" content={logement.description} />
                <Collapse title="Equipements" content={logement.equipments.map((equipments) => (
                <li className="equipmentslist" key={`${equipments}`}>{ equipments}</li>
            ) )} />
            </div>
        </div>
    
        )
    
        }
 

export default Logement;
