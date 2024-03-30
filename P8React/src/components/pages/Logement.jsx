
import { useNavigate, useParams } from "react-router-dom";
import logements from "../../data/logements.json";
import Caroussel from "../Caroussel";
import ApartmentHeader from "../ApartmentHeader";
import  Collapse  from "../Collapse";
import Erreur404 from "../Error404";
import Footer from "../Footer";
import { useEffect } from "react";
function findLogementID (id) {
    return logements.find((logement) =>logement.id === id)
}
function Logement () {
    const{id} = useParams();
    const logement = findLogementID(id);
    const navigate = useNavigate();
    useEffect(() => {
        if (!logement) {
            navigate("/error404")
        }
    })
    if (!logement)
    return <div> <Erreur404 /> </div>
    
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
            <footer>
                <Footer />
            </footer>
        </div>
       
        )
    }
 
export default Logement;
