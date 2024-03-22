import BannerAbout from "../BannerAbout";
import "../pages/about.scss";
import { DescriptionEquipment } from "../DescriptionEquipment";

function About () {
    return (
      <div>
        <BannerAbout />
        <DescriptionEquipment title="Fiablité" content="Les annonces postées sur Kasa garantissent une diabilté totale.Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"/>
        <DescriptionEquipment title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme"/>
        <DescriptionEquipment title="Service" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme"/>
        <DescriptionEquipment title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes"/>

      </div>
    );
  };
  
  export default About